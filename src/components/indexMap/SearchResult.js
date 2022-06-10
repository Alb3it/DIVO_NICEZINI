/*global kakao*/
import styled from 'styled-components';
import { useFetch } from '@hooks';
import { IM_QUERY_URL, RANK_BS_URL } from '@api';
import { useEffect, useState } from 'react';
import { changeZoom, defaultQuery } from '@constants';
import { showPopup, showArea } from '@functions';
import FilterModal from '@/components/indexMap/FilterModal';

export default function SearchResult({ query, queryType, setQueryType, queryList, setQueryList, clearState, hide, map, searchInput, setSearchInput, setInput, setQuery, markers, setMarkers, placeOverlay, setId, setBoxList, polygon, tempPolygon }){
  const [ bounds, setBounds ] = useState(null);
  const [ regionFilter, setRegionFilter ] = useState({ code: 0, name: '전국' });
  
  const removeSharp = string => {
    if(string?.[0] === '#' || string?.[0] === '@') return string.substring(1);
    return string;
  };

  const realQueryType = (queryType, key) => {
    if(key === '#' && queryType === 'place') return 'tag';
    else if(key === '@' && queryType === 'place') return 'influencer';
    return queryType;
  };

  const { payload: qList, error: qError } = useFetch(
    IM_QUERY_URL + removeSharp(searchInput) + '&rf=' + regionFilter.code,
    null,
    'GET',
    [searchInput, regionFilter],
    searchInput
  );

  const onClickQuery = query => {
    if(queryType === 'region'){
      setQuery(query);
      map.setLevel(changeZoom(query.code));
      map.panTo(new kakao.maps.LatLng(query.center.lat, query.center.lon));
    }
    else if(queryType === 'place'){
      placeOverlay.setMap(null);
      setId(query.code);
      map.panTo(new kakao.maps.LatLng(query.lat, query.lng));
    }
    else if(queryType === 'keyword'){
      showArea(map, polygon, query, true);
      setBoxList(list => list.some(e => e.id === query.code) ? list : [{type: 'kw', id: query.code}, ...list.slice(0, 4)]);
    }
    else if(queryType === 'category'){
      setBoxList(list => list.some(e => e.id === query) ? list : [{type: 'cat', id: query}, ...list.slice(0, 4)]);
    }
  }

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
  
  let qType = realQueryType(queryType, searchInput?.[0]);

  const queryResult = (queryList, queryType) => {
    if(!queryList) return null;
    switch(queryType){
      case 'place':
        if(queryList[qType]?.result?.length !== 0){ 
          return queryList[qType]?.result?.map(e => (
            <S.QueryBox onClick={() => onClickQuery(e)} key={e.code} onMouseOver={() => onMouseOver(e.code)} onMouseOut={() => onMouseOut(e.code)}>
              <S.Title>
                <S.Ellipsis>{e.name}</S.Ellipsis>
                <S.Rank>{e.rank}위</S.Rank>
              </S.Title>
              <S.Addr>{e.address}</S.Addr>
            </S.QueryBox>
          ));
        }
        return <S.Empty>검색 결과가 없습니다</S.Empty>;
      
      case 'region':
        return queryList[queryType]?.result?.length > 0 ? queryList[queryType].result.map(e => (
          <S.QueryBox onClick={() => onClickQuery(e)} key={e.code}>
            <S.Title>
              {e.name}
            </S.Title>
          </S.QueryBox>
        )) : <S.Empty>검색 결과가 없습니다</S.Empty>;

      case 'keyword':
        return queryList[queryType]?.result?.length > 0 ? queryList[queryType].result.map(e => (
          <S.QueryBox onClick={() => onClickQuery(e)} key={e.code} onMouseOver={() => showArea(map, tempPolygon, e)} onMouseOut={() => tempPolygon.setMap(null)}>
            <S.Title>
              {e.name}
            </S.Title>
          </S.QueryBox>
        )) : <S.Empty>검색 결과가 없습니다</S.Empty>;

      case 'category':
        return queryList[queryType]?.result?.length > 0 ? queryList[queryType].result.map(e => (
          <S.QueryBox onClick={() => onClickQuery(e)} key={e}>
            <S.Title>
              {e}
            </S.Title>
          </S.QueryBox>
        )) : <S.Empty>검색 결과가 없습니다</S.Empty>;
      
      default:
        return null;
    }
  }

  useEffect(() => {
    if(!queryList) return;
    for(const marker of markers){
      marker.marker.setMap(null);
    }
    let newMarkers = [];
    if(queryType==='place') queryList[qType].result.forEach(corp => {
      let marker = new kakao.maps.Marker({ opacity: 0.9 });
      let popup = new kakao.maps.InfoWindow({ zIndex: 1 });

      marker.setPosition(new kakao.maps.LatLng(corp.lat, corp.lng));
      marker.setMap(map);
      newMarkers.push({ marker, popup, id: corp.code });

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
        setId(corp.code);
        map.panTo(new kakao.maps.LatLng(corp.lat, corp.lng));
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        popup.close();
        marker.setZIndex(0);
      });
    });
    setMarkers(newMarkers);
    polygon.setMap(null);
    tempPolygon.setMap(null);
  }, [queryList, queryType, query, regionFilter]);

  const { payload: boundList, error } = useFetch(
    RANK_BS_URL,
    { bounds },
    'POST',
    [bounds],
    bounds
  );

  useEffect(() => {
    setQueryList(qList);
  }, [qList]);

  useEffect(() => {
    if(!boundList) return;
    clearState();
    setQueryList({
      place: { result: boundList.data },
      region: { result: [] },
      keyword: { result: [] }
    });
    setSearchInput(null);
    setInput('');
    setQueryType('place');
  }, [boundList]);

  useEffect(() => {
    if(searchInput === '') setQueryList(null);
    if(searchInput !== '') clearState();
  }, [searchInput, regionFilter]);

  return (
    <>
      {
        !hide && queryList && 
        <>
          <S.Gradient />
          <S.Body>
            <S.Tab>
              <S.Button onClick={() => setQueryType('region')} selected={queryType==='region'}>지역</S.Button>
              <S.Button onClick={() => setQueryType('keyword')} selected={queryType==='keyword'}>상권</S.Button>
              <S.Button onClick={() => setQueryType('category')} selected={queryType==='category'}>업종</S.Button>
              <S.Button onClick={() => setQueryType('place')} selected={queryType==='place'}>점포</S.Button>
            </S.Tab>
            {queryResult(queryList, queryType)}
          </S.Body>
        </>
      }
      <S.Filter>
        <S.Details>
          <S.Summary><i className="fas fa-sliders-h"></i></S.Summary>
          <FilterModal regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
        </S.Details>
      </S.Filter>
      <S.Bound onClick={() => {setBounds(map.getBounds()); setSearchInput(null);}}><i className="fas fa-utensils"></i></S.Bound>
      <S.Korea onClick={() => setQuery(defaultQuery)}><i className="fas fa-chart-pie"></i></S.Korea>
    </>
  );
}

const S = {};

S.Gradient = styled.div`
  position: absolute;
  top: 0;
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
  padding: 68px 0 20px 0;
  color: #263b4d;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: 0px;
  left: 154px;
  bottom: 0;
  width: 320px;
  box-shadow: 2px 4px 12px rgb(38 59 77 / 20%);
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  &::-webkit-scrollbar{
    background-color: transparent;
  }
  overflow-y: auto;
`;

S.Empty = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

S.Tab = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #263b4d33;
`;

S.Button = styled.button`
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  background: none;
  &:hover{
    cursor: pointer;
  }
  color: #263b4d;
  ${props => props.selected && `
      background: rgba(255, 255, 255, 0.8);
      font-weight: bold;
  `}
`;

S.QueryBox = styled.div`
  padding: 20px;
  &:hover{
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid #263b4d33;
`;

S.Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
`;

S.Rank = styled.div`
  font-weight: normal;
  font-family: 'Montserrat', 'Pretendard';
  font-size: 12px;
  flex-shrink: 0;
`;

S.Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

S.Addr = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

S.Click = styled.div`
  position: absolute;
  top: 26px;
  left: 154px;
  height: 36px;
  width: 36px;
  background: white;
  border: none;
  border-radius: 20px;
  color: #263b4dd3;
  font-weight: bold;
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  font-size: 14px;
  &:hover{
    color: #263b4d;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Bound = styled(S.Click)`
  left: 530px;
  &:hover{
    cursor: pointer;
  }
`;

S.Korea = styled(S.Click)`
  left: 576px;
  &:hover{
    cursor: pointer;
  }
`;

S.Filter = styled(S.Click)`
  left: 484px;
`;

S.Summary = styled.summary`
  &::-webkit-details-marker{
    display: none;
  }
  list-style: none;
  &:hover{
    cursor: pointer;
  }
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.Details = styled.details`
  width: 100%;
  height: 100%;
`;