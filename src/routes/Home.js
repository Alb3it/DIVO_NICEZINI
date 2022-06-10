import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  return (
    <S.Box>
      1. 외식소비의도 상세 분석
    </S.Box>
  );
}

const S = {};

S.TitleBox = styled.div`

`;

S.Box = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: start;
  align-items: start;
  height: 100%;
  padding: 20px 0;
`;