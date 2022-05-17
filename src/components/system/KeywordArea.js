import { useState } from "react";
import styled from "styled-components";
import { useFetch } from "@hooks";
import { IM_QUERY_URL } from "@api";

export default function KeywordArea({ keywordList, setKeywordList }){
  const [ input, setInput ] = useState('');
  const [ query, setQuery ] = useState('');
  const { payload: searchResult } = useFetch(
    IM_QUERY_URL + query + '&rf=0',
    null,
    'GET',
    [query],
    query
  );

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      setQuery(input);
    }
  }

  return (
    <S.Flex>
      <S.Search>
        <S.Input placeholder="상권 키워드 입력" value={input} onChange={e => setInput(e.target.value)} onKeyPress={onKeyPress} />
        <S.Button onClick={() => setQuery(input)}><i className="fas fa-search"></i></S.Button>
      </S.Search>
      <S.Result>
        {searchResult?.keyword?.result?.map(keyword => (
          <S.Query onClick={() => !keywordList.includes(keyword.name) && setKeywordList(k => [...k, keyword.name])}>
            {keyword.name}
          </S.Query>
        ))}
        {searchResult?.keyword?.result?.length === 0 && <S.Empty>검색결과가 없습니다</S.Empty>}
      </S.Result>
      <S.KeywordList>
        {
          keywordList.map(keyword => 
            <S.Keyword key={keyword}>
              {keyword}
              <S.Close onClick={() => setKeywordList(k => k.filter(kw => kw !== keyword))}>x</S.Close>
            </S.Keyword>
          )
        }
      </S.KeywordList>
    </S.Flex>
  );
}

const S = {};

S.Empty = styled.div`
  padding: 12px;
  font-size: 14px;
`;

S.Close = styled.button`
  padding: 0;
  margin-left: 5px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

S.KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 450px;
`;

S.Keyword = styled.div`
  background: #d2d2d7;
  color: #1d1d1f;
  padding: 12px 20px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

S.Flex = styled.div`
  display: flex;
  width: 60%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  flex-flow: column;
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

S.Button = styled.button`
  background: none;
  border: none;
  padding-right: 12px;
  cursor: pointer;
`;

S.Search = styled.div`
  display: flex;
  width: 450px;
  border-radius: 10px;
  border: 1px solid #d2d2d7;
  margin-top: 10px;
`;

S.Result = styled.div`
  display: flex;
  flex-flow: column;
  width: 450px;
  max-height: 300px;
  overflow-y: auto;
  padding: 12px 0;
`;

S.Query = styled.div`
  padding: 12px;
  font-size: 14px;
  &:hover{
    font-weight: bold;
  }
  cursor: pointer;
`;