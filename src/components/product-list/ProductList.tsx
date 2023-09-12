import { Link } from 'react-router-dom';
import styled from 'styled-components';

import productList from '../../data/product.json';
import { product } from '../../interfaces/product';

const ProductListBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
  return (
    <ProductListBlock>
      {productList.map((product: product) => (
        <ProductItem to={`/products/${product.id}`} key={product.id}>
          <img src={product.imageUrl} alt="" />
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
