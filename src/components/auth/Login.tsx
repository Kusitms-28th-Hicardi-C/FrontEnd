import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUserLogin } from '../../hooks/auth/useLogin';
import { useState } from 'react';

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem auto;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
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

const AuthInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 10px;
  padding: 1.1rem 1.5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    navigate('/');
    loginMutation.mutate();
  };
  const handleSignupClick = () => {
    navigate('/signup/agreement');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = {
    loginId: id,
    password: password,
  };
  const loginMutation = useUserLogin(login);

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm>
        <AuthInput type="text" name="id" placeholder="아이디" onChange={handleInputChange} />
        <AuthInput type="password" name="password" placeholder="비밀번호" onChange={handleInputChange} />
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
