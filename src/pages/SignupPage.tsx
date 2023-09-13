import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Title/Header';

const Container = styled.div`
  padding: 2rem 15%;
`;

const SignupPage = () => {
  return (
    <Container>
      <Header>회원가입</Header>
      <Outlet />
    </Container>
  );
};

export default SignupPage;
