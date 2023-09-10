import styled from 'styled-components';
import Index from './Index';
import { useNavigate } from 'react-router-dom';

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 20px;
  padding: 3rem 5rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;

  span {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue1};
  }
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  background: ${({ theme }) => theme.colors.blue5};
  width: 100%;
  border-radius: 30px;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const Information = styled.div`
  display: flex;
  font-size: 1.3rem;

  span {
    font-size: 1.4rem;
    font-weight: 800;
    margin-right: 1rem;
    width: 5rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.colors.blue2};
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1.2rem;
`;

const Complete = () => {
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate('/');
  };

  return (
    <>
      <Index index={3} />
      <CompleteBox>
        <Content>회원가입이 완료되었습니다</Content>
        <Content>
          <span>이채영</span> 님은 [일반회원] 회원이십니다.
        </Content>
        <InformationBox>
          <Information>
            <span>아이디</span> hongildong
          </Information>
          <Information>
            <span>이름</span>홍길동
          </Information>
          <Information>
            <span>이메일</span> hongildong@gmail.com
          </Information>
        </InformationBox>
      </CompleteBox>
      <ButtonBox>
        <Button onClick={handleCompleteClick}>가입 완료</Button>
      </ButtonBox>
    </>
  );
};

export default Complete;
