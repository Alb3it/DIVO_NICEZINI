/*global kakao*/
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { mapLineOptions, mapBarOptions, regionType, mapPieOptions } from '@constants';
import { applyStyleToPieChart, applyStyleToMapChart, showPopup, showArea } from '@functions';
import { IM_PL_URL, IM_KW_URL, IM_RG_URL, IM_CAT_URL } from '@api';
import { useFetch } from '@hooks';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function RegionContent({ hide, query, setQuery, map, setBoxList, markers, setMarkers, setId, placeOverlay, polygon, tempPolygon }){
  const [ preview, setPreview ] = useState(true);
  const [ areaPreview, setAreaPreview ] = useState(true);
  const [ catPreview, setCatPreview ] = useState(true);
  const [ showAge, setShowAge ] = useState(false);
  const [ showWeek, setShowWeek ] = useState(false);
  const [ showMonth, setShowMonth ] = useState(false);
  const [ showSubRegion, setShowSubRegion ] = useState(true);
  const { payload: placeList, loading: pLLoading, error: pLError } = useFetch(
    IM_PL_URL + query.code,
    null,
    'GET',
    [query],
    query
  );
  
  const { payload: areaList, loading: aLLoading, error: aError } = useFetch(
    IM_KW_URL + query.code,
    null,
    'GET',
    [query],
    query
  );

  const { payload: regionStat, loading: rSLoading, error: rSError } = useFetch(
    IM_RG_URL + query.code,
    null,
    'GET',
    [query],
    query
  );

  const { payload: categoryList, loading: cLLoading, error: cLError } = useFetch(
    IM_CAT_URL + query.code,
    null,
    'GET',
    [query],
    query
  );

  useEffect(() => {
    if(!placeList) return;
    for(const marker of markers){
      marker.marker.setMap(null);
    }
    let newMarkers = [];
    placeList.placeList.forEach(corp => {
      let marker = new kakao.maps.Marker({ opacity: 0.9 });
      let popup = new kakao.maps.InfoWindow({ zIndex: 1 });

      marker.setPosition(new kakao.maps.LatLng(corp.lat, corp.lng));
      marker.setMap(map);
      newMarkers.push({ marker, popup, id: corp.id });

      let popupContent = `
        <style>
          .popup{
            display: block;
            color: #263b4d;
            background: white;
            text-align: center;
            padding: 8px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
            border: 1px solid rgba(38, 59, 77, 0.2);
            box-shadow: 2px 4px 12px rgb(38 59 77 / 50%);
            width: max-content;
          }
        </style>
        <div class="popup">
          ${corp.name}
        </div>
      `;
      popup.setContent(popupContent);
      popup.setPosition(new kakao.maps.LatLng(corp.lat, corp.lng));

      kakao.maps.event.addListener(marker, 'click', () => {
        placeOverlay.setMap(null);
        setId(corp.id);
        map.panTo(new kakao.maps.LatLng(corp.lat, corp.lng));
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        popup.close();
        marker.setZIndex(0);
      });
    });

    setMarkers(newMarkers);
  }, [placeList]);

  const onClickCorp = place => {
    placeOverlay.setMap(null);
    setId(place.id);
    map.panTo(new kakao.maps.LatLng(place.lat, place.lng));
  };

  const onMouseOver = id => {
    for(const marker of markers){
      if(id === marker.id){
        showPopup(map, marker.popup, marker.marker);
        return;
      }
    }
  };

  const onMouseOut = id => {
    for(const marker of markers){
      if(id === marker.id){
        marker.popup.close();
        marker.marker.setZIndex(0);
        return;
      }
    }
  };

  if(hide) return <></>;

  return (
    <>
      <S.Gradient />
      <S.Body>
        <S.Title>
          <S.TitleBar>
            {query.name}
            <S.Back onClick={() => setQuery(null)}><i className="fas fa-times"></i></S.Back>
          </S.TitleBar>
          <S.Type>
            {regionType(query.code)} 상권
          </S.Type>
        </S.Title>
        <S.Box>
          {rSLoading ? <Loading size={50} /> : 
          <>
            <S.Subtitle>외식소비의도</S.Subtitle>
            <S.Chart>
              {regionStat && <Line options={mapLineOptions()} data={applyStyleToMapChart(regionStat?.data.searchAmountGraph)} />}
            </S.Chart>
            <S.Comment>
              <S.Flex>
                <S.Icon><i className="fas fa-random"></i></S.Icon>
                평균 점포 순위
              </S.Flex>
              {placeList?.avgRank.toLocaleString()}위
            </S.Comment>
            <S.Comment>
              <S.Flex>
                <S.Icon><i className="fas fa-venus-mars"></i></S.Icon>
                남성 비율
              </S.Flex>
              {regionStat?.data.genderGraph?.[0]}%
            </S.Comment>
            <S.Comment>
              <S.Flex>
                <S.Icon><i className="fas fa-laptop"></i></S.Icon>
                PC 비율
              </S.Flex>
              {regionStat?.data.deviceGraph?.[0]}%
            </S.Comment>
            <S.Comment clickable onClick={() => setShowAge(s => !s)}>
              <S.Flex>
                <S.Icon><i className="fas fa-user"></i></S.Icon>
                연령별 비율
              </S.Flex>
              <i className={"fas fa-angle-" + (!showAge ? "down" : "up")}></i>
            </S.Comment>
            {
              showAge &&
              <S.ChartBox>
                {regionStat && <Bar options={mapBarOptions('%', false, false)} data={applyStyleToMapChart(regionStat?.data.agesGraph, false, true)}/>}
              </S.ChartBox>
            }
            <S.Comment clickable onClick={() => setShowWeek(s => !s)}>
              <S.Flex>
                <S.Icon><i className="fas fa-calendar-week"></i></S.Icon>
                요일별 비율
              </S.Flex>
              <i className={"fas fa-angle-" + (!showWeek ? "down" : "up")}></i>
            </S.Comment>
            {
              showWeek &&
              <S.ChartBox>
                {regionStat && <Bar options={mapBarOptions('%', false, false)} data={applyStyleToMapChart(regionStat?.data.weekGraph, false, true)}/>}
              </S.ChartBox>
            }
            <S.Comment clickable onClick={() => setShowMonth(s => !s)}>
              <S.Flex>
                <S.Icon><i className="fas fa-calendar"></i></S.Icon>
                월별 비율
              </S.Flex>
              <i className={"fas fa-angle-" + (!showMonth ? "down" : "up")}></i>
            </S.Comment>
            {
              showMonth &&
              <S.ChartBox last>
                {regionStat && <Bar options={mapBarOptions('%', false, false)} data={applyStyleToMapChart(regionStat?.data.monthGraph, false, true)}/>}
              </S.ChartBox>
            }
            {regionStat?.data.subRegionGraph.labels.length > 0 && 
              <>
                <S.Comment clickable onClick={() => setShowSubRegion(s => !s)}>
                  <S.Flex>
                    <S.Icon><i className="fas fa-globe-asia"></i></S.Icon>
                    지역 비율
                  </S.Flex>
                  <i className={"fas fa-angle-" + (!showSubRegion ? "down" : "up")}></i>
                </S.Comment>
                {
                  showSubRegion &&
                  <S.ChartBox last>
                    {regionStat && <Doughnut options={mapPieOptions()} plugins={[ChartDataLabels]} data={applyStyleToPieChart(regionStat?.data.subRegionGraph)}/>}
                  </S.ChartBox>
                }
              </>
            }
          </>}
        </S.Box>
        <S.Box>
          <S.CSubtitle onClick={() => setAreaPreview(p => !p)}>
            주요 상권
            <i className={"fas fa-angle-" + (areaPreview ? "down" : "up")}></i>
          </S.CSubtitle>
          <S.RankBox>
            {aLLoading ? <Loading size={50} /> : 
              areaList?.keywordList.slice(0, areaPreview ? 5 : 100)?.map((area, index) => (
                <S.Blur key={area.keyword} onClick={() => {showArea(map, polygon, area, true); setBoxList(list => list.some(e => e.id === area.keyword) ? list : [{type: 'kw', id: area.keyword}, ...list.slice(0, 4)]);}} onMouseOver={() => showArea(map, tempPolygon, area)} onMouseOut={() => tempPolygon.setMap(null)}>
                  <S.Flex>
                    <S.Rank>{index+1}</S.Rank>
                    <S.Ellipsis>{area.keyword}</S.Ellipsis>
                  </S.Flex>
                  <S.Qty>{area.searchAmount.toLocaleString()}</S.Qty>
                </S.Blur>
              ))
            }
          </S.RankBox>
        </S.Box>
        <S.Box>
          <S.CSubtitle onClick={() => setCatPreview(p => !p)}>
            주요 업종
            <i className={"fas fa-angle-" + (catPreview ? "down" : "up")}></i>
          </S.CSubtitle>
          <S.RankBox>
            {cLLoading ? <Loading size={50} /> : 
              categoryList?.data.slice(0, catPreview ? 5 : 100)?.map((cat, index) => (
                <S.Blur key={cat} onClick={() => setBoxList(list => list.some(e => e.id === cat) ? list : [{type: 'cat', id: cat}, ...list.slice(0, 4)])}>
                  <S.Flex>
                    <S.Rank>{index+1}</S.Rank>
                    <S.Ellipsis>{cat}</S.Ellipsis>
                  </S.Flex>
                  <S.Qty></S.Qty>
                </S.Blur>
              ))
            }
          </S.RankBox>
        </S.Box>
        <S.Box>
          <S.CSubtitle onClick={() => setPreview(p => !p)}>
            상위 20개 점포
            <i className={"fas fa-angle-" + (preview ? "down" : "up")}></i>
          </S.CSubtitle>
          <S.RankBox>
            {pLLoading ? <Loading size={50} /> :
              placeList?.placeList?.slice(0, preview ? 5 : 20).map((corp, i) => (
                <S.Blur key={corp.id} onClick={() => onClickCorp(corp)} onMouseOver={() => onMouseOver(corp.id)} onMouseOut={() => onMouseOut(corp.id)}>
                  <S.Flex>
                    <S.Rank>{i+1}</S.Rank>
                    <S.Ellipsis>{corp.name}</S.Ellipsis>
                  </S.Flex>
                  <S.Qty>{corp.rank.toLocaleString()}위</S.Qty>
                </S.Blur>
              ))
            }
          </S.RankBox>
        </S.Box>
      </S.Body>
    </>
  );
}

const S = {};

S.Back = styled.div`
  &:hover{
    cursor: pointer;
  }
  font-size: 16px;
`;

S.TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.RightBar = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 280px;
  display: flex;
  flex-flow: column;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

S.Close = styled.div`
  font-size: 12px;
  &:hover{
    cursor: pointer;
  }
`;

S.Gradient = styled.div`
  position: absolute;
  top: 0px;
  left: 154px;
  width: 320px;
  height: 58px;
  backdrop-filter: blur(12px);
  z-index: 1;
`;

S.Body = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  padding: 68px 20px 20px 20px;
  color: #263b4d;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  max-height: 100%;
  top: 0;
  left: 154px;
  width: 320px;
  box-shadow: 2px 4px 12px rgb(38 59 77 / 20%);
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  &::-webkit-scrollbar{
    background-color: transparent;
    width: 4px;
  }
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
`;

S.Title = styled.div`
  font-weight: bold;
  padding: 20px 0 30px 0;
  font-size: 20px;
`;

S.Type = styled.div`
  color: #3166a1;
  font-weight: normal;
  font-size: 14px;
  margin-top: 10px;
`;

S.Box = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: column;
`;

S.Subtitle = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

S.CSubtitle = styled(S.Subtitle)`
  &:hover{
    cursor: pointer;
  }
`;

S.Chart = styled.div`
  padding: 20px 10px 20px 0;
`;

S.ChartBox = styled.div`
  padding-right: 10px;
  ${props => !props.last && 'padding-bottom: 20px;'}
`;

S.Comment = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', 'Pretendard';
  margin-bottom: 16px;
  justify-content: space-between;
  ${props => props.clickable && '&:hover{cursor:pointer;}'}
`;

S.Flex = styled.div`
  display: flex;
  min-width: 0;
`;

S.Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

S.Icon = styled.div`
  margin-right: 7px;
  font-size: 14px;
  width: 18px;
  display: flex;
  justify-content: center;
`;

S.Blur = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 12px;
  margin-top: 10px;
  box-shadow: 2px 4px 12px rgb(38 59 77 / 8%);
  display: flex;
  font-size: 14px;
  opacity: .8;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
  transition: .2s;
  justify-content: space-between;
`;

S.Qty = styled.span`
  font-family: 'Montserrat', 'Pretendard';
  font-size: 13px;
  min-width: max-content;
  flex-shrink: 0;
`;

S.Rank = styled.div`
  font-family: 'Montserrat';
  font-weight: bold;
  width: 26px;
`;

S.RankBox = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 10px;
`;