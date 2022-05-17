import styled from 'styled-components';
import { useFetch } from '@hooks';
import { IM_CS_URL } from '@api';
import { Line, Bar } from 'react-chartjs-2';
import { mapLineOptions, mapBarOptions } from '@constants';
import { applyStyleToMapChart } from '@functions';
import { useEffect, useState } from 'react';

export default function CategoryBox({ keyword, boxList, setBoxList, defaultOpen }){
  const [ open, setOpen ] = useState(defaultOpen);

  const deleteFromList = () => setBoxList(list => list.filter(element => element.id !== keyword));

  useEffect(() => setOpen(defaultOpen), [boxList]);

  const { payload, error } = useFetch(
    IM_CS_URL + keyword,
    null,
    'GET',
    [keyword],
    keyword
  );

  return (
    <S.Box>
      <S.Title>
        <S.Toggle onClick={() => setOpen(o => !o)}>
          <S.Hide><i className={"fas fa-caret-" + (open ? "right" : "down")}></i></S.Hide>
          <S.Ellipsis>{keyword}</S.Ellipsis>
        </S.Toggle>
        <S.Close onClick={deleteFromList}><i className="fas fa-times"></i></S.Close>
      </S.Title>
      {
        (open && payload) &&
        <S.StatBox>
          <S.Stat>
            <S.StatName><S.Marker><i className="fas fa-search"></i></S.Marker>검색량</S.StatName>
            <S.StatNum>{payload?.amount.toLocaleString()}건</S.StatNum>
          </S.Stat>
          <S.Chart>
            <Line options={mapLineOptions('건', false, true)} data={applyStyleToMapChart(payload?.amountChart, true)} />
          </S.Chart> 
          <S.Stat>
            <S.StatName><S.Marker><i className="fas fa-edit"></i></S.Marker>컨텐츠 발행량</S.StatName>
            <S.StatNum>{payload?.contents}건</S.StatNum>
          </S.Stat> 
          <S.Stat>
            <S.StatName><S.Marker><i className="fas fa-venus-mars"></i></S.Marker>남성 검색 비율</S.StatName>
            <S.StatNum>{payload?.gender}%</S.StatNum>
          </S.Stat>
          <S.Stat>
            <S.StatName><S.Marker><i className="fas fa-laptop"></i></S.Marker>PC 검색 비율</S.StatName>
            <S.StatNum>{payload?.device}%</S.StatNum>
          </S.Stat> 
          <details>
            <S.Summary>
              <S.Stat>
                <S.StatName><S.Marker><i className="fas fa-user"></i></S.Marker>연령별 검색 비율</S.StatName>
              </S.Stat>
            </S.Summary>
            <S.Chart>
              <Bar options={mapBarOptions('%')} data={applyStyleToMapChart(payload?.ages, true, true)} />
            </S.Chart> 
          </details>
          <details>
            <S.Summary>
            <S.Stat>
              <S.StatName><S.Marker><i className="fas fa-calendar-week"></i></S.Marker>요일별 검색 비율</S.StatName>
            </S.Stat>
            </S.Summary>  
            <S.Chart>
              <Bar options={mapBarOptions('%')} data={applyStyleToMapChart(payload?.weekday, true, true)} />
            </S.Chart> 
          </details>
          <details>
            <S.Summary>
              <S.Stat>
                <S.StatName><S.Marker><i className="fas fa-calendar"></i></S.Marker>월별 검색 비율</S.StatName>
              </S.Stat>
            </S.Summary>
            <S.Chart>
              <Bar options={mapBarOptions('%', true)} data={applyStyleToMapChart(payload?.month, true, true)} />
            </S.Chart>
          </details>
        </S.StatBox>
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

S.Link = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: right;
  margin-top: 10px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

S.Hide = styled.div`
  margin-right: 8px;
  width: 6px;
  flex-shrink: 0;
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

S.Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

S.Close = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

S.StatBox = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
`;

S.Stat = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 10px 0;
  ${props => props.clickable && '&:hover{cursor:pointer;}'}
`;

S.StatName = styled.div`
  font-weight: 600;
  font-size: 13px;
  display: flex;
`;

S.StatNum = styled.div`
  font-family: 'Montserrat', 'Pretendard';
`;

S.Marker = styled.div`
  margin-right: 7px;
  width: 15px;
  display: flex;
  justify-content: center;
`;

S.Chart = styled.div`
`;

S.Border = styled.div`
  padding-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f5f5f733;
`;

S.Place = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

S.Number = styled.div`
  font-family: 'Montserrat';
  width: 24px;
  font-weight: 600;
`;

S.Flex = styled.div`
  display: flex;
  min-width: 0;
`;

S.Rank = styled.div`
  margin-left: 10px;
  min-width: max-content;
  font-family: 'Montserrat', 'Pretendard';
`;

S.Summary = styled.summary`
  &::-webkit-details-marker{
    display: none;
  }
  list-style: none;
  &:hover{
    cursor: pointer;
  }
`;