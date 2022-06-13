import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SideBar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <S.SideBar>
        <S.TitleBox>
          <S.TitleButton onClick={()=>{setCurrentPage(0);navigate('/');}}>Divo</S.TitleButton>
        </S.TitleBox>
        <S.Navigate o={0} onClick={()=>{setCurrentPage(0);navigate('/');}} active={currentPage===0 ? true : false}>시작하기</S.Navigate>
        <S.Navigate o={1} onClick={()=>{setCurrentPage(1);navigate('system');}} active={currentPage===1 ? true : false}>외식소비의도 <br></br>상세분석</S.Navigate>
        <S.Navigate o={2} onClick={()=>{setCurrentPage(2);navigate('index-map');}} active={currentPage===2 ? true : false}>키워드 상권분석</S.Navigate>
        <S.Navigate o={3} onClick={()=>{setCurrentPage(3);navigate('growth');}} active={currentPage===3 ? true : false}>급등락 키워드</S.Navigate>
      </S.SideBar>
    </>
  )
}

const S = {};

S.Navigate = styled.div`
  width: 125px;
  position: fixed;
  left: 15px;
  top: ${props => props.o*55+80}px;
  height: 45px;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  padding: 7px 5px;
  border-radius: 5px;
  align-items: center;
  background-color: ${props => props.active ? "#555555" : "white"};
  color: ${props => props.active ? "white" : "#555555"};
  &:hover{
    cursor: pointer;
    transition: 0.15s;
    background-color: #555555;
    color: white;
  }
`;

S.TitleButton = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

S.TitleBox = styled.div`
  display : flex;
  height: 40px;
  text-align: start;
  position: fixed;
  top: 17px;
  margin: 0 15px;
  width: 125px;
  font-size: 23px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px #777777 solid;
  margin-bottom: 20px;
`;

S.SideBar = styled.div`
  width: 154px;
  position: sticky;
  top: 0;
  max-height: 100%;
  color: #555555;
  border-right: 0.5px #dddddd solid;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-itmes: center;
  padding: 20px 0;
`;