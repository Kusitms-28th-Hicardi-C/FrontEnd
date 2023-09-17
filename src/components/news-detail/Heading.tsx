import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};

  h5 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 1.5rem;
  }

  a {
    padding: 0.375rem 1rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media screen and (max-width: 992px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 0.5rem;
    padding-bottom: 1rem;
  }
`;

const Heading = () => {
  return (
    <HeadingBlock>
      <h5>뉴스</h5>
      <Link to="/news">메인으로 돌아가기</Link>
    </HeadingBlock>
  );
};

export default Heading;
