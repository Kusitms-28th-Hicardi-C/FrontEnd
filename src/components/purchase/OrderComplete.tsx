import styled from 'styled-components';
import Header from '../common/Title/Header';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { idState, nameState } from '../../states/user';

const CompleteBlock = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: 50%;
  right: 50%;
  background: ${({ theme }) => theme.colors.box4};
  padding: 2rem 15vw;
  margin: -2rem -50vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 3rem 5rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  > div {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;

    > span {
      font-size: 1.4rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.blue1};
    }
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  background: ${({ theme }) => theme.colors.blue5};
  width: 100%;
  border-radius: 30px;
  margin-top: 1.5rem;
  gap: 1rem;

  div {
    display: flex;
    font-size: 1.3rem;

    span {
      font-size: 1.4rem;
      font-weight: 800;
      margin-right: 1rem;
      width: 5rem;
      white-space: nowrap;
    }
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 0.5rem 4rem;
    font-size: 1.4rem;
    font-weight: 800;
    border-radius: 10px;
    border: none;
    background: ${({ theme }) => theme.colors.gray6};
  }
`;

const OrderComplete = () => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate('/');
  };

  const id = useRecoilValue(idState);
  const name = useRecoilValue(nameState);
  const email = useRecoilValue(idState);

  return (
    <CompleteBlock>
      <Header>주문 완료</Header>
      <Index index={4} />
      <Content>
        <div>주문이 완료되었습니다.</div>
        <Information>
          <div>
            <span>아이디</span> {id}
          </div>
          <div>
            <span>이름</span> {name}
          </div>
          <div>
            <span>이메일</span> {email}@naver.com
          </div>
        </Information>
      </Content>
      <Button>
        <button onClick={handleCloseClick}>닫기</button>
      </Button>
    </CompleteBlock>
  );
};

export default OrderComplete;
