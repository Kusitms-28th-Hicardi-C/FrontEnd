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
  border: 1px solid #cfcfcf;

  img {
    padding: 2rem;
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const ContentArea = styled.div`
  padding: 1.5rem 2rem 2rem 2rem;

  h2 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.75rem;
  }

  b {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 32px;
  font-weight: 500;
`;

const ProductList = () => {
  return (
    <ProductListBlock>
      {productList.map((product: product) => (
        <ProductItem to={`/products/${product.id}`} key={product.id}>
          <img src={product.imageUrl} alt="" />
          <ContentArea>
            <Badge>{product.category}</Badge>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <b>{product.price.toLocaleString()}원</b>
          </ContentArea>
        </ProductItem>
      ))}
    </ProductListBlock>
  );
};

export default ProductList;
