import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function MobileHeader(){
  const [ showMenu, setShowMenu ] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Flex>
      <S.Header showMenu={showMenu}>
        <S.Icon onClick={() => setShowMenu(s => !s)}>{showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</S.Icon>
        <S.Logo>Divo</S.Logo>
        <S.Icon><i className="fas fa-user"></i></S.Icon>
      </S.Header>
      {showMenu && 
        <S.Menus>
          <S.Search>
            <S.SearchBar>
              <S.SearchIcon>
                <i className="fas fa-search"></i>
              </S.SearchIcon>
              <S.Input placeholder="키워드를 입력하세요" />
            </S.SearchBar>
          </S.Search>
          <S.Menu onClick={() => navigate('/')}>키워드 분석</S.Menu>
          <S.Menu onClick={() => navigate('/')}>검색 노출도</S.Menu>
          <S.Menu onClick={() => navigate('/')}>키워드 평가</S.Menu>
          <S.Menu onClick={() => navigate('/')}>매출액 분석</S.Menu>
          <S.Menu onClick={() => navigate('/')}>음식점 순위</S.Menu>
          <S.Menu onClick={() => navigate('/')}>커뮤니티</S.Menu>
        </S.Menus>
      }
    </S.Flex>
  );
}

const S = {};

S.Flex = styled.div`
  z-index: 6;
  display: flex;
  flex-flow: column;
  flex: 1;
`;

S.Header = styled.div`
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7); color: #f5f5f7;
  backdrop-filter: saturate(180%) blur(20px);
  ${props => props.showMenu && 'background: black;'}
`;

S.Icon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  width: 56px;
`;

S.SearchIcon = styled.div`
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

S.Input = styled.input`
  background: none;
  border: none;
  &::placeholder{
    color: #f5f5f7;
  }
  &:focus{
    outline: none;
  }
`;

S.Logo = styled.div`
  font-family: 'Montserrat', 'Pretendard';
  font-size: 17px;
  font-weight: bold;
`;

S.Menus = styled.div`
  display: flex;
  flex-flow: column;
  background: black;
  color: #f5f5f7;
  flex: 1;
`;

S.Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  border-top: 1px solid #d2d2d7b3;
  font-size: 14px;
`;

S.Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 20px 20px;
  font-size: 14px;
`;

S.SearchBar = styled.div`
  background: #424245;
  flex: 1;
  border-radius: 5px;
  padding: 15px 20px;
  display: flex;
`;