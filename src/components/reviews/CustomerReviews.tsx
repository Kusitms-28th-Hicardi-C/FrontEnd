import styled from 'styled-components';
import Title from '../common/Title/Title';
import { useState } from 'react';

interface CategoryProps {
  isActive: boolean;
}

const CustomerReviewsBlock = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const CategoryBox = styled.ul`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  margin: 0.5rem 0 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue1};
`;

const Category = styled.li<CategoryProps>`
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 1rem;
  padding-bottom: 0.5rem;

  ${({ isActive, theme }) =>
    isActive &&
    `color: ${theme.colors.blue1}; 
     font-weight: bold; 
     border-bottom: 4px solid ${theme.colors.blue1}; 
    `}
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.blue1};
  }
`;

const ContentBox = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;

  img {
    width: 40%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > div {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }
  > ul > li {
    padding: 0.2rem 0;
  }
`;

const CustomerReviews = () => {
  const [active, setActive] = useState(0);

  const handleOptionClick = (index: number) => {
    setActive(index);
  };

  return (
    <CustomerReviewsBlock>
      <Title>고객 리뷰</Title>
      <CategoryBox>
        <Category isActive={active === 0} onClick={() => handleOptionClick(0)}>
          서울삼성병원 A 원장
        </Category>
        <Category isActive={active === 1} onClick={() => handleOptionClick(1)}>
          서울아산병원 B 원장
        </Category>
        <Category isActive={active === 2} onClick={() => handleOptionClick(2)}>
          종합의료업체 C사
        </Category>
      </CategoryBox>
      <ContentBox>
        <img src={''} alt="리뷰" />
        <Content>
          <div>제목일이삼사오육칠</div>
          <ul>
            <li>일이삼사오육칠</li>
            <li>일이삼사오육칠</li>
            <li>일이삼사오육칠</li>
            <li>일이삼사오육칠</li>
            <li>일이삼사오육칠</li>
            <li>일이삼사오육칠</li>
          </ul>
        </Content>
      </ContentBox>
    </CustomerReviewsBlock>
  );
};

export default CustomerReviews;
