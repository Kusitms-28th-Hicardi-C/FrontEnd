import styled from 'styled-components';
import Box from '../common/Box';
import Index from './Index';
import Header from '../common/Title/Header';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoxBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  font-size: 1.6rem;
  gap: 2rem;
  margin: 0 0 10rem 0;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1.4rem;
  font-weight: 800;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.gray6};
`;

const Payment = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/products/${productId}/purchase/orderComplete`);
    }, 2000);
  }, []);

  return (
    <>
      <Header>결제</Header>
      <Index index={3} />
      <BoxBlock background="#f8f9fb">
        결제가 진행중입니다.<Button>다시 결제 시도하기</Button>
      </BoxBlock>
    </>
  );
};

export default Payment;
