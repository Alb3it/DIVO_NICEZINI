import styled from 'styled-components';
import { useFetch } from '@hooks';
import { RANK_OM_URL, IM_PLKW_URL } from '@api';
import { Line } from 'react-chartjs-2';
import { mapLineOptions } from '@constants';
import { applyStyleToMapChart } from '@functions';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function OMRankBox({ id, boxList, setBoxList, defaultOpen }){
  const { payload, loading, error } = useFetch(
    RANK_OM_URL + id,
    null,
    'GET',
    [id],
    id
  );

  const { payload: keywordList, loading: kwLoading, error: kLError } = useFetch(
    IM_PLKW_URL + id,
    null,
    'GET',
    [id],
    id
  );

  const copyString = (list, type) => {
    let string = '';
    list?.forEach(keyword => {
      string = string + `#${type === 'keyword' ? keyword[type] : keyword} `;
    });
    return string;
  };

  const [ open, setOpen ] = useState(defaultOpen);

  const deleteFromList = () => {
    setBoxList(list => list.filter(element => element.id !== id));
  };

  useEffect(() => setOpen(defaultOpen), [boxList]);

  return (
    <S.Box>
      {
        !(loading || kwLoading) ?
        <>
          <S.Title>
            <S.Toggle onClick={() => setOpen(o => !o)}>
              <S.Hide><i className={"fas fa-caret-" + (open ? "right" : "down")}></i></S.Hide>
              <S.Ellipsis>{payload?.name}</S.Ellipsis>
            </S.Toggle>
            <S.Close onClick={deleteFromList}><i className="fas fa-times"></i></S.Close>
          </S.Title>
          {open &&
            <>
              <S.Ratio>상위 {payload?.ratio}%</S.Ratio>
              <S.Rank>{payload?.rank}위</S.Rank>
              <S.Delta>{Math.abs(payload?.delta)}위 {payload?.delta >= 0 ? '상승' : '하락'}</S.Delta>
              <S.Chart>
                {payload && <Line options={mapLineOptions('위', true, true)} data={applyStyleToMapChart(payload?.chart, true)}/>}
              </S.Chart>
              <S.AreaBox>
                {payload?.areaRank.map(rank => (
                  <S.Arearank key={rank.name}>
                    <S.Area><S.AreaName>{rank.name}</S.AreaName>에서</S.Area>
                    <S.Stat>{rank.rank}위</S.Stat>
                  </S.Arearank>
                ))}
              </S.AreaBox>
              <details>
                <S.Summary><S.SubTitle>업종 분류</S.SubTitle></S.Summary>
                <CopyToClipboard text={copyString(keywordList.tagList, 'tag')} onCopy={() => alert('클립보드에 복사되었습니다')}>
                  <S.Keywords>
                    {copyString(keywordList.tagList, 'tag')}
                  </S.Keywords>
                </CopyToClipboard>
              </details>
              <details>
                <S.Summary><S.SubTitle>추천 키워드</S.SubTitle></S.Summary>
                <CopyToClipboard text={copyString(keywordList.keywordList, 'keyword')} onCopy={() => alert('클립보드에 복사되었습니다')}>
                  <S.Keywords>
                    {copyString(keywordList.keywordList, 'keyword')}
                  </S.Keywords>
                </CopyToClipboard>
              </details>
            </>
          }
        </> :
        <S.Loading>
          <Loading isWhite />
        </S.Loading>
      }
    </S.Box>
  );
}

const S = {};

S.Toggle = styled.div`
  display: flex;
  &:hover{
    cursor: pointer;
  }
  min-width: 0;
`;

S.Hide = styled.div`
  margin-right: 8px;
  width: 6px;
  flex-shrink: 0;
`;

S.Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

S.Box = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: saturate(180%) blur(12px);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 20px 0 20px;
  color: #f5f5f7;
  display: flex;
  flex-flow: column;
`;

S.Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

S.Close = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

S.Ratio = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 12px;
`;

S.Rank = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Montserrat', 'Pretendard';
  margin-top: 10px;
`;

S.Delta = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px;
`;

S.Chart = styled.div`
  margin-top: 20px;
`;

S.AreaBox = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px 0;
`;

S.Arearank = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 12px;
`;

S.AreaName = styled.div`
  font-weight: 600;
  font-size: 13px;
  margin-right: 5px;
`;

S.Area = styled.div`
  display: flex;
  align-items: end;
  font-size: 11px;
`;

S.Stat = styled.div`
  font-family: 'Montserrat', 'Pretendard';
`;

S.Loading = styled.div`
  height: 240px;
`;

S.Keywords = styled.div`
  padding: 0 0 10px 0;
  font-size: 12px;
  line-height: 1.5;
  &:hover{
    cursor: pointer;
    font-weight: 600;
  }
`;

S.SubTitle = styled.div`
  border-top: 1px solid #f5f5f733;
  font-size: 13px;
  font-weight: bold;
  padding-top: 22px;
`;

S.Summary = styled.summary`
  &::-webkit-details-marker{
    display: none;
  }
  list-style: none;
  &:hover{
    cursor: pointer;
  }
  margin-bottom: 22px;
`;