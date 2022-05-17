import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, body, fetchType, dependency = [], condition = true) => {
  const [ payload, setPayload ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  
  const token = process.env.REACT_APP_TTOKEN;

  let fetcher = () => {};
  switch(fetchType){
    case 'POST':
      fetcher = (url, body) => axios.post(url, body, token ? {headers: {"Authorization": `Token ${token}`}} : null);
      break;
    
    case 'GET':
      fetcher = (url, body) => axios.get(url, token ? {headers: {"Authorization": `Token ${token}`}} : null);
      break;
    
    default:
      break;
  }

  useEffect(() => {
    if(!condition) return;
    
    setLoading(true);
    setError(false);

    fetcher(url, body)
    .then(res => setPayload(res.data))
    .then(() => setLoading(false))
    .catch(e => setError(true));

  }, dependency);

  return { payload, loading, error };
}

export const useDetectOutsideClick = (targetRef, initialState) => {
  const [ isActive, setIsActive ] = useState(initialState);

  useEffect(() => {
    const onClick = ({ target }) => {
      if(targetRef.current !== null && !targetRef.current.contains(target)){
        setIsActive(!isActive);
      }
    };

    if(isActive){
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, targetRef]);

  return [ isActive, setIsActive ];
}