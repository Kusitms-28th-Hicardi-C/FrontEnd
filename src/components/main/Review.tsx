import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import quotes from '../../assets/signs/quotes.svg';
import rightArrow from '../../assets/signs/right-arrow.svg';

const ReviewBlock = styled.section`
  background-image: linear-gradient(104.04deg, #01a4ff 4.31%, #00c2ff 94.48%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const ReviewList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
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
`;

const MoreLink = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;

  img {
    height: 1rem;
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
        </ReviewList>
        <MoreLink to="/reviews">
          자세히 보기
          <img src={rightArrow} alt="오른쪽 화살표" />
        </MoreLink>
      </ContentWrapper>
    </ReviewBlock>
  );
};

export default Review;
