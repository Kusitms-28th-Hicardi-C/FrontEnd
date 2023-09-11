import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 15%;
`;

const PurchasePage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default PurchasePage;
