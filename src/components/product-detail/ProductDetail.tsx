import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../common/Button/Button';
import { product } from '../../interfaces/product';
import productList from '../../data/product.json';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const ProductDetailBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 992px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    justify-content: center;

    img {
      width: 300px;
    }
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

const ImageBottomSpacer = styled.div``;

const ProductContentBottom = styled.div`
  /* margin-top: 4rem; */
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

  const handlePurchaseClick = () => {
    navigate('purchase/information');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  useEffect(() => {
    if (productId === '') {
      navigate(-1);
    } else {
      const index = productList.findIndex((product) => product.id === Number(productId));
      setProduct(productList[index]);
    }
  }, []);

  return (
    <ProductDetailBlock initial="hidden" animate="visible" variants={TextAnimation}>
      <ProductImage>
        <img src={product?.imageUrl} alt="하이카르디+" />
      </ProductImage>
      <ProductContent>
        <Badge>{product?.category}</Badge>
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
        <Price>{product?.price.toLocaleString()}원</Price>
      </ProductContent>
      <ImageBottomSpacer></ImageBottomSpacer>
      <ProductContentBottom>
        <Amount>
          총 상품(수량) : <b>0</b>(개)
        </Amount>
        <ButtonGroup>
          <StyledButton onClick={handlePurchaseClick} active>
            구매하기
          </StyledButton>
          <StyledButton onClick={handleCartClick}>장바구니 추가</StyledButton>
        </ButtonGroup>
      </ProductContentBottom>
    </ProductDetailBlock>
  );
};

export default ProductDetail;
