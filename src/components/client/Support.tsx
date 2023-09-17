import styled from 'styled-components';
import howToUseIcon from '../../assets/client/howToUse.svg';
import questionMarkIcon from '../../assets/client/questionMark.svg';
import productIcon from '../../assets/client/product.svg';
import { RefObject } from 'react';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

interface SupportProps {
  howToUseRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
}

const Banner = styled.div`
  width: 100%;
  padding: 3rem 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue4};
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.div`
  margin-bottom: 2.2rem;
  font-size: 1.2rem;
`;

const ButtonBox = styled(motion.div)`
  display: flex;
  gap: 3rem;
`;

const CircleButton = styled.button`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue1};
  background: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Support = ({ howToUseRef, faqRef, productRef }: SupportProps) => {
  const { ref, animation } = useObserver();

  const handleMoveScroll = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Banner>
      <Title>고객 지원</Title>
      <SubTitle>하이카디 사용법 영상과 메뉴얼을 확인하세요.</SubTitle>
      <ButtonBox ref={ref} animate={animation} variants={ContainerAnimation}>
        <CircleButton onClick={() => handleMoveScroll(howToUseRef)}>
          <img src={howToUseIcon} alt="howToUse" />
          사용법
        </CircleButton>
        <CircleButton onClick={() => handleMoveScroll(faqRef)}>
          <img src={questionMarkIcon} alt="questionMark" />
          FAQ
        </CircleButton>
        <CircleButton onClick={() => handleMoveScroll(productRef)}>
          <img src={productIcon} alt="product" />
          제품 소개서
        </CircleButton>
      </ButtonBox>
    </Banner>
  );
};

export default Support;
