import styled from 'styled-components';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailState, idState, nameState } from '../../states/user';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 20px;
  padding: 3rem 5rem;
  margin-bottom: 2rem;

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

  > div {
    display: flex;
    font-size: 1.3rem;

    > span {
      font-size: 1.4rem;
      font-weight: 800;
      margin-right: 1rem;
      width: 5rem;
      white-space: nowrap;
    }
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
  const id = useRecoilValue(idState);
  const name = useRecoilValue(nameState);
  const email = useRecoilValue(emailState);

  const handleCompleteClick = () => {
    navigate('/');
  };

  return (
    <>
      <Index index={3} />
      <Content>
        <div>회원가입이 완료되었습니다</div>
        <div>
          <span>{name}</span> 님은 [일반회원] 회원이십니다.
        </div>
        <Information>
          <div>
            <span>아이디</span> {id}
          </div>
          <div>
            <span>이름</span> {name}
          </div>
          <div>
            <span>email</span> {email}@naver.com
          </div>
        </Information>
      </Content>
      <ButtonBox>
        <Button onClick={handleCompleteClick}>가입 완료</Button>
      </ButtonBox>
    </>
  );
};

export default Complete;
