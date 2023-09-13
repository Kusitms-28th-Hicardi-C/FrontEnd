import { useState } from 'react';
import styled from 'styled-components';

const CartContentBlock = styled.div`
  margin-bottom: 3rem;
`;

const CartTableHead = styled.div`
  display: grid;
  grid-template-columns: 25% 30% 15% 20% 10%;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray3};

  h1 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 1.5rem;
    font-weight: 900;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray3};
    font-weight: 600;
  }
`;

const CartTableBody = styled.div``;

const CartTableRow = styled.div`
  display: grid;
  grid-template-columns: 8% 17% 30% 15% 20% 10%;
  grid-template-rows: 100px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray3};
`;

const CheckButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckButtonBlock = styled.button`
  img {
    width: 25px;
    height: 25px;
  }
`;

const CheckButton = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckButtonBlock
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <img src={`/images/check-button/${checked ? 'checked' : 'unchecked'}.svg`} alt="체크 버튼" />
    </CheckButtonBlock>
  );
};

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    height: 100%;
  }
`;

const ProductName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductQuantityAction = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const RemoveButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveButton = styled.button`
  img {
    width: 20px;
  }
`;

const CartContent = () => {
  return (
    <CartContentBlock>
      <CartTableHead>
        <h1>장바구니</h1>
        <span>상품정보</span>
        <span>수량</span>
        <span>주문금액</span>
        <span></span>
      </CartTableHead>
      <CartTableBody>
        <CartTableRow>
          <CheckButtonWrapper>
            <CheckButton />
          </CheckButtonWrapper>
          <ProductImage>
            <img src="/images/products/product1.png" alt="하이카디 제품 이미지" />
          </ProductImage>
          <ProductName>하이카디플러스 HiCardi+</ProductName>
          <ProductQuantityAction>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </ProductQuantityAction>
          <ProductPrice>2,046,000원</ProductPrice>
          <RemoveButtonWrapper>
            <RemoveButton>
              <img src="/images/icons/close.svg" alt="삭제 버튼" />
            </RemoveButton>
          </RemoveButtonWrapper>
        </CartTableRow>
        <CartTableRow>
          <CheckButton />
          <ProductImage>
            <img src="/images/products/product9.png" alt="하이카디 제품 이미지" />
          </ProductImage>
          <ProductName>하이카디플러스 HiCardi+</ProductName>
          <ProductQuantityAction>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </ProductQuantityAction>
          <ProductPrice>2,046,000원</ProductPrice>
          <RemoveButtonWrapper>
            <RemoveButton>
              <img src="/images/icons/close.svg" alt="삭제 버튼" />
            </RemoveButton>
          </RemoveButtonWrapper>
        </CartTableRow>
      </CartTableBody>
    </CartContentBlock>
  );
};

export default CartContent;
