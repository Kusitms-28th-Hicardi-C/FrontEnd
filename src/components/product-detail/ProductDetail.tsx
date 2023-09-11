import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

import Button from '../common/Button';
import { productListState } from '../../states/products';
import { product } from '../../interfaces/product';

interface DropdownMenuItemProps {
  onClick: React.MouseEventHandler<HTMLLIElement>;
  children: React.ReactNode;
}

const ProductDetailBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    width: 300px;
  }
`;

const ProductContent = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  /* h3 {
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
  } */

  p {
    margin-top: 1rem;
    font-weight: 300;
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.blue4};
  color: ${({ theme }) => theme.colors.blue1};
  font-weight: 600;
`;

const Price = styled.span`
  display: inline-block;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
`;

const DropdownBlock = styled.ul`
  position: relative;

  li {
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
`;

const DropdownDefaultItem = styled.li`
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.2px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 32px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 1.25rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue4};
  border-radius: 16px;
`;

const DropdownMenuItemBlock = styled.li`
  font-weight: 300;

  & + & {
    border-top: 0.2px solid ${({ theme }) => theme.colors.gray3};
  }

  &:nth-child(2) {
    border-top: 0;
  }
`;

const DropdownMenuItem = ({ onClick, children }: DropdownMenuItemProps) => {
  return <DropdownMenuItemBlock onClick={onClick}>{children}</DropdownMenuItemBlock>;
};

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const clickAndSetVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <DropdownBlock>
      <DropdownDefaultItem onClick={clickAndSetVisible}>
        [필수] 옵션을 선택해 주세요.
        {isVisible ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </DropdownDefaultItem>
      {isVisible && (
        <DropdownMenu>
          <DropdownMenuItem onClick={clickAndSetVisible}>{/* Spacer */}</DropdownMenuItem>
          <DropdownMenuItem onClick={clickAndSetVisible}>[필수] 옵션을 선택해 주세요.</DropdownMenuItem>
          <DropdownMenuItem onClick={clickAndSetVisible}>[필수] 옵션을 선택해 주세요.</DropdownMenuItem>
        </DropdownMenu>
      )}
    </DropdownBlock>
  );
};

const ImageBottomSpacer = styled.div``;

const ProductContentBottom = styled.div`
  margin-top: 4rem;
`;

const Amount = styled.div`
  b {
    font-weight: 700;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  flex-grow: 1;
  margin-top: 1rem;
  padding: 1rem 0;
`;

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState<product | null>(null);
  const productList = useRecoilValue(productListState);

  useEffect(() => {
    if (productId === '') {
      navigate(-1);
    } else {
      const index = productList.findIndex((product) => product.id === Number(productId));
      setProduct(productList[index]);
    }
  }, [productList]);

  return (
    <ProductDetailBlock>
      <ProductImage>
        <img src={require(`../../assets/products/hicardi+.png`)} alt="하이카르디+" />
      </ProductImage>
      <ProductContent>
        <Badge>{product?.category}</Badge>
        <h2>{product?.name}</h2>
        {/* <h3>Smart Patch</h3> */}
        <p>{product?.description}</p>
        <Price>{product?.price.toLocaleString()}원</Price>
        <Dropdown />
      </ProductContent>
      <ImageBottomSpacer></ImageBottomSpacer>
      <ProductContentBottom>
        <Amount>
          총 상품(수량) : <b>0</b>(개)
        </Amount>
        <ButtonGroup>
          <StyledButton active>구매하기</StyledButton>
          <StyledButton>장바구니 추가</StyledButton>
        </ButtonGroup>
      </ProductContentBottom>
    </ProductDetailBlock>
  );
};

export default ProductDetail;
