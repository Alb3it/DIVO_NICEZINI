import { useState } from "react";
import styled from 'styled-components';
import LegalArea from "@/components/system/LegalArea";
import KeywordArea from "@/components/system/KeywordArea";
import STable from "@/components/system/Table";
import Loading from "@/components/Loading";
import { IM_RG_URL, SYS_KW_RANK_URL } from "@api";
import { useFetch } from "@hooks";
import DetailPopup from "@/components/system/DetailPopup";
import { systemCols, systemQCols, csvHeader, csvQHeader } from "@constants";

export default function System(){
  const [ regionType, setRegionType ] = useState('regionCodes');
  const [ codeList, setCodeList ] = useState({
    ctp: [],
    sig: [],
    emd: []
  });
  const [ tableInput, setTableInput ] = useState(['0']);
  const [ keywordList, setKeywordList ] = useState([]);
  const [ query, setQuery ] = useState("");
  const [ startDate, setStartDate ] = useState('2021-05-01');
  const [ endDate, setEndDate ] = useState('2022-05-01');

  const [ popupCode, setPopupCode ] = useState(null);

  const onSubmit = () => {
    const legalInput = codeList.emd.length ? codeList.emd : codeList.sig.length ? codeList.sig : codeList.ctp.length ? codeList.ctp : ['0'];
    if(regionType === 'regionCodes') setTableInput(legalInput);
    else if(regionType === 'keywords') setTableInput(keywordList);
    else {
      if(query.length>2) {
        setTableInput(query);
      } else {
        alert("3글자 이상 입력해 주세요.");
      }
    }
  };

  const { payload: tableData, loading: tableLoading } = useFetch(
    IM_RG_URL + '0',
    {
      [regionType] : tableInput,
      startDate,
      endDate
    },
    'POST',
    [tableInput, startDate, endDate],
    tableInput.length
  );

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onSubmit();
    }
  }

  return (
    <>
      <S.Table>
        {tableLoading ? <S.Loading><Loading size={40} /></S.Loading> : tableData && <STable column={regionType === 'query' ? systemQCols : systemCols} data={tableData.data} setPopupCode={setPopupCode} csvHeaders={regionType === 'query' ? csvQHeader : csvHeader} csvTitle={regionType==='query' ? "음식점 통계" : "상권 통계"} fixed />}
      </S.Table>
      <S.Toggle>
        <S.Button selected={regionType === 'regionCodes'} onClick={() => setRegionType('regionCodes')}>행정구역</S.Button>
        <S.Button selected={regionType === 'keywords'} onClick={() => setRegionType('keywords')}>키워드상권</S.Button>
        <S.Button selected={regionType === 'query'} onClick={() => setRegionType('query')}>음식점</S.Button>
      </S.Toggle>
      <S.DateRange>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        {'~'}
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </S.DateRange>
        {regionType==='regionCodes' && <LegalArea codeList={codeList} setCodeList={setCodeList} />}
        {regionType==='keywords' && <KeywordArea keywordList={keywordList} setKeywordList={setKeywordList} />}
        {regionType==='query' && 
        <S.QBox>
          <S.Search>
            <S.Input placeholder="음식점 이름 입력(3자 이상)" value={query} onChange={e => setQuery(e.target.value)} onKeyPress={onKeyPress} />
            <S.QButton onClick={onSubmit}><i className="fas fa-search"></i></S.QButton>
          </S.Search>
        </S.QBox>
      }
      <S.Submit onClick={onSubmit}>상권 분석</S.Submit>
      {popupCode && <DetailPopup popupCode={popupCode} setPopupCode={setPopupCode} />}
    </>
  );
}



const S = {};

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
  margin: 20px auto;
  padding: 10px 0;
  border-radius: 5px;
  background: #06c;
  color: #f5f5f7;
  border: none;
  cursor: pointer;
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

S.Input = styled.input`
  padding: 12px;
  flex: 1;
  border: none;
  background: none;
  border-radius: 10px;
  &:focus{
    outline: none;
  }
`;

S.QButton = styled.button`
  background: none;
  border: none;
  padding-right: 12px;
  cursor: pointer;
`;

S.Search = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  border-radius: 10px;
  border: 1px solid #d2d2d7;
  margin-top: 10px;
`;

S.QBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`;