import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import useObserver from '../../hooks/useObserver';
import { motion } from 'framer-motion';
import { ContainerAnimation } from '../../styles/animation';

const SupportBlock = styled.section`
  position: relative;
  width: 100%;
  background-color: #f8f9fb;
  margin: 0 auto;
  padding: 4rem 0 1rem 0;
  text-align: center;

  @media screen and (max-width: 430px) {
    padding-top: 2rem;
  }

  img {
    width: 60%;

    @media screen and (max-width: 568px) {
      width: 90%;
    }
  }
`;

const SupportImages = styled(motion.div)`
  text-align: center;
  > img {
    &:hover {
      transform: translateY(-2.2rem);
      transition: transform 0.8s ease-in-out;
    }
  }

  .gradation {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    img {
      width: 100%;
      height: 150px;
    }

    @media screen and (max-width: 568px) {
      img {
        height: 100px;
      }
    }
  }

  .spacer {
    height: 50px;

    @media screen and (max-width: 568px) {
      height: 30px;
    }
  }

  .more-link-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 1.5rem;
    text-align: center;

    .more-link {
      color: ${({ theme }) => theme.colors.gray5};
      font-size: 0.875rem;
      text-decoration: underline;
    }
  }
`;

const SectionDescription = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.blue1};
  font-size: 1.125rem;
`;

const Support = () => {
  const { ref, animation } = useObserver();

  return (
    <SupportBlock>
      <SectionTitle>국내 최고 의료기관의 든든한 선택</SectionTitle>
      <SectionDescription>국내 40여 의료기관이 이미 하이카디를 선택했습니다</SectionDescription>
      <SupportImages ref={ref} animate={animation} variants={ContainerAnimation}>
        <img src="/images/main/support.svg" alt="병원 의료기관 지원사" />
        <div className="gradation">
          <img src="/images/supports/gradation.png" alt="gradation" />
        </div>
        <div className="spacer"></div>
        <div className="more-link-wrapper">
          <Link to="/reviews" className="more-link">
            + 더 알아보기
          </Link>
        </div>
      </SupportImages>
    </SupportBlock>
  );
};

export default Support;
