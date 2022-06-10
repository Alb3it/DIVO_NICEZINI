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
        <S.Navigate onClick={()=>{setCurrentPage(0);navigate('/');}} active={currentPage===0 ? true : false}>시작하기</S.Navigate>
        <S.Navigate onClick={()=>{setCurrentPage(1);navigate('system');}} active={currentPage===1 ? true : false}>외식소비의도 <br></br>상세분석</S.Navigate>
        <S.Navigate onClick={()=>{setCurrentPage(2);navigate('index-map');}} active={currentPage===2 ? true : false}>키워드 상권분석</S.Navigate>
        <S.Navigate onClick={()=>{setCurrentPage(3);navigate('growth');}} active={currentPage===3 ? true : false}>급등락 키워드</S.Navigate>
      </S.SideBar>
    </>
  )
}

const S = {};

S.Navigate = styled.div`
  width: 100%-30px;
  height: 45px;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  padding: 7px 5px;
  margin: 5px 10px;
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
  margin: 0 15px;
  width: 100%-30px;
  font-size: 23px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px #777777 solid;
  margin-bottom: 20px;
`;

S.SideBar = styled.div`
  width: 154px;
  height: 100%;
  color: #555555;
  border-right: 0.5px #dddddd solid;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-itmes: center;
  padding: 20px 0;
`;