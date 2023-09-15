import styled from 'styled-components';
import { Link } from 'react-router-dom';

import productList from '../../data/product.json';
import { product } from '../../interfaces/product';
import Pagination from '../common/Pagination';
import WhiteBox from './WhiteBox';
import Heading from './Heading';

interface ProductItemProps {
  product: product;
}

const ProductList = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`;

const ProductItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 315px;
  border-radius: 16px;
  box-shadow: 0px 0px 30px 0px #0000004d;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 150px;

  img {
    height: 100%;
  }
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductContentTop = styled.div`
  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.75rem;
  }
`;

const ProductContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 1.375rem;
    font-weight: 700;
  }

  a {
    background-color: ${({ theme }) => theme.colors.blue4};
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 32px;
  }
`;

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductItemBlock>
      <ProductImage>
        <img src={product.imageUrl} alt={product.name} />
      </ProductImage>
      <ProductContent>
        <ProductContentTop>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </ProductContentTop>
        <ProductContentBottom>
          <span>{product.price.toLocaleString()}원</span>
          <Link to={`/products/${product.id}`}>자세히 보기</Link>
        </ProductContentBottom>
      </ProductContent>
    </ProductItemBlock>
  );
};

const ProductSection = () => {
  return (
    <>
      <WhiteBox>
        <Heading h1="제품명" span="(검색결과 2건)" />
        <ProductList>
          <ProductItem product={productList[0]} />
          <ProductItem product={productList[1]} />
        </ProductList>
        <Pagination />
      </WhiteBox>
    </>
  );
};

export default ProductSection;
