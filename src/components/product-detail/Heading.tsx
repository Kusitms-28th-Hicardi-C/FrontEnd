import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 2rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray5};

  h1 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 1.5rem;
  }

  a {
    background-color: ${({ theme }) => theme.colors.blue4};
    padding: 0.25rem 1rem;
    border-radius: 16px;
  }

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

const Heading = () => {
  return (
    <HeadingBlock>
      <h1>제품 둘러보기</h1>
      <Link to="/products">전체 제품 보기</Link>
    </HeadingBlock>
  );
};

export default Heading;
