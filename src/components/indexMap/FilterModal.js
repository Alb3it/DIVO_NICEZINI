import { useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '@hooks';
import { IM_QUERY_URL } from '@api';

export default function FilterModal({ regionFilter, setRegionFilter }){
  const [ input, setInput ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ showInput, setShowInput ] = useState(false);

  const { payload, error } = useFetch(
    IM_QUERY_URL + filter + '&rf=0',
    null,
    'GET',
    [filter],
    filter
  );

  const onClickRegion = (code, name) => {
    setRegionFilter({code, name});
    setInput('');
    setFilter('');
    setShowInput(false);
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      setFilter(input);
    }
  }

  return (
    <S.Modal>
      <S.FilterTitle>
        지역필터
        <S.Reset onClick={() => {setRegionFilter({ code: 0, name: '전국' });}}><i className="fas fa-redo"></i></S.Reset>
      </S.FilterTitle>
      {regionFilter && <S.Selected>
        {regionFilter.name}
        <S.Button onClick={() => setShowInput(true)}>변경</S.Button>
      </S.Selected>}
      {showInput && <S.Flex>
        <S.Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={onKeyPress} placeholder="지역 검색"/>
        <S.Button onClick={() => setFilter(input)}>검색</S.Button>
      </S.Flex>}
      {filter && <S.RegionList>
        {payload?.region.result?.map(region => (
        <S.Region key={region.code} onClick={() => onClickRegion(region.code, region.name)}>
          {region.name}
        </S.Region>
        ))}
      </S.RegionList>}
    </S.Modal>
  );
}


const S = {};

S.Modal = styled.div`
  position: absolute;
  background: white;
  border-radius: 10px;
  top: 50px;
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  padding: 15px;
  width: max-content;
  font-size: 14px;
  display: flex;
  flex-flow: column;
  align-items: start;
  color: #263b4d;
`;

S.FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

S.Reset = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

S.Input = styled.input`
  border: none;
  border-bottom: 1px solid #263b4d;
  padding: 5px;
  &:focus{
    outline: 1px solid #263b4d;
  }
`;

S.Flex = styled.div`
  display: flex;
  margin-top: 15px;
`;

S.Button = styled.button`
  margin-left: 5px;
`;

S.Region = styled.div`
  font-weight: normal;
  font-size: 12px;
  padding: 5px 0;
  width: 100%;
  text-align: left;
  &:hover{
    font-weight: bold;
  }
`;

S.RegionList = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-top: 10px;
  max-height: 500px;
  overflow-y: auto;
  width: 100%;
`;

S.Selected = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  font-weight: normal;
  min-width: 210px;
`;