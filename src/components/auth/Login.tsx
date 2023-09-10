import styled from 'styled-components';
import Input from '../common/Input';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 1.1rem 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

const LoginButton = styled(Button)`
  background: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
`;

const SignupButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray2};
`;

const FindBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

const Find = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
  text-align: center;
  whtie-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </LoginForm>
      <ButtonBox>
        <LoginButton type="submit" onClick={handleLoginClick}>
          로그인하기
        </LoginButton>
        <SignupButton onClick={handleSignupClick}>신규 회원가입</SignupButton>
      </ButtonBox>
      <FindBox>
        <Find>아이디 찾기</Find>
        <Find>비밀번호 찾기</Find>
      </FindBox>
    </Container>
  );
};

export default Login;
