import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Inspection(){
  const navigate = useNavigate();
  const { corpId } = useParams();
  return (
    <S.Content>
      <S.Text>서비스 점검 중입니다.</S.Text>
      <S.Login onClick={() => navigate(corpId !== undefined ? '/cid=' + corpId : '/')}>홈으로 돌아가기</S.Login>
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