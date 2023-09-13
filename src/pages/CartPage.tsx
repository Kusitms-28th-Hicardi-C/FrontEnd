import styled from 'styled-components';

import GrayBackground from '../components/common/GrayBackground';
import CartContent from '../components/cart/CartContent';
import PurchaseAction from '../components/cart/PurchaseAction';

const StyledGrayBackground = styled(GrayBackground)`
  padding-top: 5rem;
  padding-bottom: 7rem;
`;

const WhiteBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 60%;
  margin: 0 auto;
  padding: 3rem;
`;

const CartPage = () => {
  return (
    <>
      <StyledGrayBackground>
        <WhiteBoxWrapper>
          <CartContent />
          <PurchaseAction />
        </WhiteBoxWrapper>
      </StyledGrayBackground>
    </>
  );
};

export default CartPage;
