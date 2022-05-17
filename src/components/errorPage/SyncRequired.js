import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function SyncRequired({ onSync }){
  const navigate = useNavigate();
  const { corpId } = useParams();
  return (
    <S.Content>
      <S.Text>{onSync ? '매출액이 연동 중입니다' : '매출액 연동이 필요합니다'}</S.Text>
      {onSync && <S.SubText>잠시 후 다시 이용해주세요</S.SubText>}
      <S.Login onClick={() => navigate(onSync ? '/cid=' + corpId : `/cid=${corpId}/sync-ys`)}>{onSync ? '홈으로 돌아가기' : '매출액 연동하기'}</S.Login>
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

S.SubText = styled.div`
  margin-top: 30px;
  font-size: 20px;
  color: #515154;
`;

S.Login = styled.div`
  color: #06c;
  margin-top: 40px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;