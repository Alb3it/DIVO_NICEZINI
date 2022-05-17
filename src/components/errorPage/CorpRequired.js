import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function CorpRequired(){
  const navigate = useNavigate();
  return (
    <S.Content>
      <S.Text>브랜드 추가가 필요한 페이지입니다.</S.Text>
      <S.Login onClick={() => navigate('/cid=0/corp-addition')}>브랜드 추가하기</S.Login>
    </S.Content>
  );
}

const S = {};

S.Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: #1d1d1f;
`;

S.Text = styled.div`
  font-weight: bold;
  font-size: 32px;
`;

S.Login = styled.div`
  color: #06c;
  margin-top: 40px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;