import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import quotes from '../../assets/signs/quotes.svg';

const ReviewBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.blue4};
  color: #393939;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const ReviewList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 90%;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const ReviewItem = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue1};
  text-align: center;
  border-radius: 16px;
  padding: 1.5rem 3rem;
  box-shadow: 24px 24px 41px 8px #0000001a;

  img {
    height: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 800;
    margin-bottom: 2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 850px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 850px) {
    font-size: 1rem;
    min-width: 300px;
  }
`;

const MoreLink = styled(Link)`
  position: absolute;
  bottom: -4rem;
  right: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;

  span {
    color: ${({ theme }) => theme.colors.gray1};
    text-decoration: underline;
  }

  img {
    height: 1rem;
  }

  @media screen and (max-width: 850px) {
    right: auto;
  }
`;

const Review = () => {
  return (
    <ReviewBlock>
      <ContentWrapper>
        <SectionTitle>하이카디를 이용한 의료진들의 생생한 후기</SectionTitle>
        <SectionDescription>모니터링 성능을 10%에서 90%까지 개선했어요</SectionDescription>
        <ReviewList>
          <ReviewItem>
            <img src={quotes} alt="따옴표" />
            <p>
              하이카디는 다른 텔레메트리
              <br />
              장비들에 비해 매우 가벼워
              <br />
              부착이 쉽고 간편했고,
              <br />
              무선이라서 선이 빠지는
              <br />
              사고 걱정이 없어졌어요.
            </p>
            <span>- 김*중 (임상병리사 10년차) -</span>
          </ReviewItem>
          <ReviewItem>
            <img src={quotes} alt="따옴표" />
            <p>
              하이카디는 다른 텔레메트리
              <br />
              장비들에 비해 매우 가벼워
              <br />
              부착이 쉽고 간편했고,
              <br />
              무선이라서 선이 빠지는
              <br />
              사고 걱정이 없어졌어요.
            </p>
            <span>- 김*중 (임상병리사 10년차) -</span>
          </ReviewItem>
          <ReviewItem>
            <img src={quotes} alt="따옴표" />
            <p>
              하이카디는 다른 텔레메트리
              <br />
              장비들에 비해 매우 가벼워
              <br />
              부착이 쉽고 간편했고,
              <br />
              무선이라서 선이 빠지는
              <br />
              사고 걱정이 없어졌어요.
            </p>
            <span>- 김*중 (임상병리사 10년차) -</span>
          </ReviewItem>

          <MoreLink to="/reviews">
            <span>자세히 보기</span>
            <img src="/images/icons/black-right-arrow-sm.png" alt="오른쪽 화살표" />
          </MoreLink>
        </ReviewList>
      </ContentWrapper>
    </ReviewBlock>
  );
};

export default Review;
