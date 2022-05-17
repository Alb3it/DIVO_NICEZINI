import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CORPLIST_URL } from '@api';
import { useFetch } from '@hooks';

export default function CorpListModal({ setShowModal, modalRef }){
  const { payload, error } = useFetch(
    CORPLIST_URL,
    null,
    'GET'
  );
  const { corpId } = useParams();

  const CORP_URL = !corpId ? '' : `/cid=${corpId}`;

  const navigate = useNavigate();

  const handleCorpAddition = e => {
    e.preventDefault();
    navigate('corp-addition');
    setShowModal(false);
  }

  const handleChangeCorp = id => {
    navigate('/cid=' + id);
    setShowModal(false);
  }

  return (
    <S.Body>
      <S.Modal ref={modalRef}>
        <S.Title><S.Icon onClick={() => setShowModal(false)}><i className="fas fa-times"></i></S.Icon></S.Title>
        <S.Col>
          {payload?.corpList.map(corp => (
            <S.Corp onClick={() => handleChangeCorp(corp[0])} key={corp[0]}>{corp[1]}</S.Corp>
          ))}
          {!payload?.corpList.length && <S.Empty>등록된 브랜드가 없습니다</S.Empty>}
        </S.Col>
        <S.Add onClick={handleCorpAddition}>브랜드 추가하기</S.Add>
      </S.Modal>
    </S.Body>
  );
}

const S = {};

S.Body = styled.div`
  background: rgba(0, 0, 0, 0.8);
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1f;
  overflow: hidden;
`;

S.Modal = styled.div`
  background: white;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  padding: 20px 0;
  min-width: 350px;
`;

S.Title = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #d2d2d7;
`;

S.Corp = styled.div`
  justify-content: center;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #d2d2d7;
  opacity: .8;
  //font-weight: bold;
  &:hover{
    cursor: pointer;
    background: #f5f5f7;
    opacity: 1;
  }
`;

S.Empty = styled.div`
  justify-content: center;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #d2d2d7;
`;

S.Add = styled.div`
  justify-content: center;
  padding-top: 20px;
  display: flex;
  font-size: 14px;
  color: #06c;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

S.Icon = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

S.Col = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 400px;
  overflow-y: auto;
`;