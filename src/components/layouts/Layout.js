import styled from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, Filler, Legend, LinearScale, LineElement, PointElement, RadialLinearScale, Tooltip } from "chart.js";
import { DEL_CORP_URL, CORPLIST_URL } from '@api';
import { useFetch } from '@hooks';
import { useEffect } from 'react';
import SideBar from './SideBar';


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

  return (
    <>
      <GlobalStyles />
      <SideBar />
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
  padding: 0 30px;
`;

