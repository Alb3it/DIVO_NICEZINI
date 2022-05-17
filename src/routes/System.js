import { useState } from "react";
import styled from 'styled-components';
import LegalArea from "@/components/system/LegalArea";
import KeywordArea from "@/components/system/KeywordArea";
import Table from "@/components/system/Table";
import Loading from "@/components/Loading";
import { IM_RG_URL, SYS_KW_RANK_URL } from "@api";
import { useFetch } from "@hooks";
import DetailPopup from "@/components/system/DetailPopup";
import { systemCols } from "@constants";
import { useNavigate } from 'react-router-dom';

export default function System(){
  const [ regionType, setRegionType ] = useState('legal');
  const [ codeList, setCodeList ] = useState({
    ctp: [],
    sig: [],
    emd: []
  });
  const [ tableInput, setTableInput ] = useState(['0']);
  const [ keywordList, setKeywordList ] = useState([]);
  const [ startDate, setStartDate ] = useState('2021-05-01');
  const [ endDate, setEndDate ] = useState('2022-05-01');

  const navigate = useNavigate();

  const [ popupCode, setPopupCode ] = useState(null);

  const onSubmit = () => {
    const legalInput = codeList.emd.length ? codeList.emd : codeList.sig.length ? codeList.sig : codeList.ctp.length ? codeList.ctp : ['0'];
    setTableInput(regionType === 'legal' ? legalInput : keywordList);
  };

  const { payload: tableData, loading: tableLoading } = useFetch(
    IM_RG_URL + '0',
    {
      [regionType === 'legal' ? 'regionCodes' : 'keywords']: tableInput,
      startDate,
      endDate
    },
    'POST',
    [tableInput, startDate, endDate],
    tableInput.length
  );

  return (
    <>
      <S.Table>
        {tableLoading ? <S.Loading><Loading size={40} /></S.Loading> : tableData && <Table column={systemCols} data={tableData.data} setPopupCode={setPopupCode} />}
      </S.Table>
      <S.Toggle>
        <S.Button selected={regionType === 'legal'} onClick={() => setRegionType('legal')}>행정구역</S.Button>
        <S.Button selected={regionType === 'keyword'} onClick={() => setRegionType('keyword')}>키워드상권</S.Button>
      </S.Toggle>
      <S.DateRange>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        {'~'}
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </S.DateRange>
      {regionType==='legal' ? 
        <LegalArea codeList={codeList} setCodeList={setCodeList} />
      : 
        <KeywordArea keywordList={keywordList} setKeywordList={setKeywordList} />
      }
      <S.Flex>
        <S.Submit onClick={onSubmit}>상권 분석</S.Submit>
        <S.Back onClick={() => navigate('/')}>홈으로 돌아가기</S.Back>
      </S.Flex>
      {popupCode && <DetailPopup popupCode={popupCode} setPopupCode={setPopupCode} />}
    </>
  );
}

const S = {};

S.Flex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

S.DateRange = styled.div`
  display: flex;
  margin: 5px auto 20px auto;
  width: 60%;
  max-width: 1200px;
  justify-content: right;
`;

S.Loading = styled.div`
  margin: 20px 0;
`;

S.Table = styled.div`
  margin: 20px auto 0 auto;
`;

S.Toggle = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
`;

S.Submit = styled.button`
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  background: #06c;
  color: #f5f5f7;
  border: none;
  cursor: pointer;
`;

S.Back = styled.button`
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  font-weight: 600;
  color: #666666;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

S.Button = styled.div`
  font-size: 14px;
  background: none;
  padding: 8px 10px;
  color: #515154;
  ${props => props.selected && `
    color: black;
    font-weight: bold;
    border-bottom: 1.5px solid;
  `}
  cursor: pointer;
`;