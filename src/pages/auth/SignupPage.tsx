import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SignupPage = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 16rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
  padding: 1.8rem 0;
`;

export default SignupPage;
