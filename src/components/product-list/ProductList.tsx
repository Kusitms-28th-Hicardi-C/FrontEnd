import { Link } from 'react-router-dom';
import styled from 'styled-components';

import productList from '../../data/product.json';
import { product } from '../../interfaces/product';
import { useRecoilValue } from 'recoil';
import { productCategoryState } from '../../states/product';

const ProductListBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductItem = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 4px 0px #0000000d;

  img {
    padding: 2rem;
    width: 100%;
    height: 300px;
    object-fit: contain;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;

    img {
      max-width: 50%;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 650px) {
    img {
      max-width: 40%;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    img {
      max-width: 100%;
      padding-right: 2rem;
      padding-bottom: 0;
    }
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 1.5rem;
  padding: 1.5rem 2rem 2rem 2rem;
  flex-grow: 1;

  b {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue1};
  }

  @media screen and (max-width: 768px) {
    padding: 3rem;
    padding-left: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding-top: 1rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue4};
  color: ${({ theme }) => theme.colors.blue1};
  font-weight: 700;
`;

const ProductInfoText = styled.div`
  h2 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.75rem;
  }
`;

const ProductList = () => {
  const category = useRecoilValue(productCategoryState);

  return (
    <ProductListBlock>
      {productList
        .filter((product) => category === '전체' || product.category === category)
        .map((product: product) => (
          <ProductItem to={`/products/${product.id}`} key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <ContentArea>
              <ProductInfoText>
                <Badge>{product.category}</Badge>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </ProductInfoText>
              <b>{product.price.toLocaleString()}원</b>
            </ContentArea>
          </ProductItem>
        ))}
    </ProductListBlock>
  );
};

export default ProductList;
