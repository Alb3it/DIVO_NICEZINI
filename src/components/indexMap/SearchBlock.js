import { useState } from "react";
import Searchbar from "@/components/indexMap/Searchbar";
import SearchResult from "@/components/indexMap/SearchResult";

export default function SearchBlock({ input, setInput, query, searchInput, setSearchInput, setQuery, queryType, setQueryType, clearState, queryList, setQueryList, hide, map, placeOverlay, markers, setMarkers, setId, place, setBoxList, polygon, tempPolygon }){
  // const [ input, setInput ] = useState('');
  return (
    <>
      <Searchbar input={input} setInput={setInput} searchInput={searchInput} setSearchInput={setSearchInput} setQuery={setQuery} clearState={clearState} />
      <SearchResult query={query} queryType={queryType} setQueryType={setQueryType} queryList={queryList} setQueryList={setQueryList} clearState={clearState} hide={hide} searchInput={searchInput} setSearchInput={setSearchInput} setInput={setInput} setQuery={setQuery} map={map} placeOverlay={placeOverlay} markers={markers} setMarkers={setMarkers} setId={setId} place={place} setBoxList={setBoxList} polygon={polygon} tempPolygon={tempPolygon} />
    </>
  );
}