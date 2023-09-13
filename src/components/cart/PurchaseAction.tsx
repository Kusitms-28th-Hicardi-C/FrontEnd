import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

const PurchaseActionBlock = styled.div``;

const TotalPrice = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

const ButtonLink = styled(Link)<ButtonProps>`
  width: 200px;
  padding: 0.75rem 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray2};
  text-align: center;

  span {
    font-size: 1.25rem;
    font-weight: 500;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.colors.blue3};
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

const PurchaseAction = () => {
  return (
    <PurchaseActionBlock>
      <TotalPrice>
        <span>총 구매 금액</span>
        <span>
          <b>2,046,000</b>원
        </span>
      </TotalPrice>
      <ButtonGroup>
        <ButtonLink to="/products">
          <span>계속 둘러보기</span>
        </ButtonLink>
        <ButtonLink to="/purchase" active>
          <span>구매하기</span>
        </ButtonLink>
      </ButtonGroup>
    </PurchaseActionBlock>
  );
};

export default PurchaseAction;
