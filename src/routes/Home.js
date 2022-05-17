import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  return (
    <S.Box>
      <S.Title onClick={() => navigate('system')}>외식소비의도 <br></br> 상세분석</S.Title>
      <S.Title onClick={() => navigate('index-map')}>키워드 상권분석</S.Title>
    </S.Box>
  );
}

const S = {};

S.Box = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  top: 48px;
  background: #f5f5f7b3;
`;

S.Title = styled.div`
  font-weight: 800;
  font-size: 54px;
  &:hover{
    transform: scale(1.01);
    transition-duration: 0.3s;
  }
  cursor: pointer;
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  color: #111111;
  box-shadow: 5px 5px 10px #aaaaaa;
`;