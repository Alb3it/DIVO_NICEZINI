import styled from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, Filler, Legend, LinearScale, LineElement, PointElement, RadialLinearScale, Tooltip } from "chart.js";
import { DEL_CORP_URL, CORPLIST_URL } from '@api';
import { useFetch } from '@hooks';
import { useEffect } from 'react';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
);

ChartJS.defaults.font.family = 'Pretendard';
ChartJS.defaults.plugins.legend.labels.usePointStyle = true;

export default function Layout({ sticky = false }){
  const { corpId } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const { payload, error } = useFetch(
    DEL_CORP_URL + (corpId === undefined ? '0' : corpId),
    null,
    'GET',
    [corpId]
  );

  const { payload: corpList, error: corpListError } = useFetch(
    CORPLIST_URL,
    null,
    'GET',
    [token],
    token
  );

  useEffect(() => {
    switch(payload?.message){
      case 'No Token':
        if(corpId) navigate('/');
        break;
      case 'invalid corpId':
        if(corpList?.corpList?.length) navigate('/cid=' + corpList?.corpList?.[0]?.[0]);
        else if(corpId !== '0') navigate('/cid=0');
        break;
      case 'unauthorized user':
        if(corpList?.corpList?.length) navigate('/cid=' + corpList?.corpList?.[0]?.[0]);
        else if(corpId !== '0') navigate('/cid=0');
        break;
      default:
        break;
    }
  }, [payload, corpList]);

  const corpName = corpId === undefined ? 'Guest' : (payload?.corpName || '브랜드 없음');

  return (
    <>
      <GlobalStyles />
      <S.Body>
        <Outlet />
      </S.Body>
    </>
  );
}

const S = {};

S.Body = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  flex: 1;
`;

