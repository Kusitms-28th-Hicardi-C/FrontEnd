import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { postListState } from '../states/posts';

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
`;

const GrayBox = styled.div`
  height: 300px;
  background-color: #d9d9d9;
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
  const postList = useRecoilValue(postListState);

  return (
    <ProductListBlock>
      {postList.map((post) => (
        <ProductItem to={`/product/${post.id}`} key={post.id}>
          <GrayBox></GrayBox>
          <ContentArea>
            <Badge>{post.category}</Badge>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <b>{post.price.toLocaleString()}원</b>
          </ContentArea>
        </ProductItem>
      ))}
    </ProductListBlock>
  );
};

export default ProductList;
