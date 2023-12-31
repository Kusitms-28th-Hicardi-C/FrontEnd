import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import quotes from '../../assets/signs/quotes.svg';
import { ContainerAnimation } from '../../styles/animation';
import useObserver from '../../hooks/useObserver';

const ReviewBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.blue4};
  color: #393939;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const ReviewList = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1250px) {
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
  padding: 1.5rem 0;
  box-shadow: 24px 24px 41px 8px #0000001a;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  line-height: 1.5;
  list-style-type: none;
  font-size: 1.1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 17.5rem;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    height: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 600;
    margin-bottom: 1rem;
    white-space: nowrap;
  }

  span {
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1250px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.1rem;
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

const SectionDescription = styled.div`
  font-size: 1.125rem;
  color: #7f8f99;
  margin-bottom: 2rem;
`;

const Review = () => {
  const { ref, animation } = useObserver();

  return (
    <ReviewBlock>
      <ContentWrapper>
        <SectionTitle>하이카디를 이용한 의료진들의 생생한 후기</SectionTitle>
        <SectionDescription>모니터링 성능을 10%에서 90%까지 개선했어요</SectionDescription>
        <ReviewList ref={ref} animate={animation} variants={ContainerAnimation}>
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
              환자의 자세를 실시간으로
              <br />
              확인할 수 있어서
              <br />
              위중도를 바로
              <br />
              판단할 수 있었어요.
            </p>
            <span>- 한*정 (간호사 5년차) -</span>
          </ReviewItem>
          <ReviewItem>
            <img src={quotes} alt="따옴표" />
            <p>
              환자에게 발생한 이벤트가
              <br />
              정확하고 상세한 데이터로 남아
              <br />
              의사와의 환자 상태에 대해
              <br />
              원활한 커뮤니케이션이
              <br />
              가능해졌어요.
            </p>
            <span>- 이*인(**병원 부원장, 5년차) -</span>
          </ReviewItem>

          <MoreLink to="/reviews">
            <span>자세히 보기</span>
            <img src="/images/icons/right-arrow.svg" alt="오른쪽 화살표" />
          </MoreLink>
        </ReviewList>
      </ContentWrapper>
    </ReviewBlock>
  );
};

export default Review;
