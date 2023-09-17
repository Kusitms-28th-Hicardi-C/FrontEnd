import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 15%;
  background: ${({ theme }) => theme.colors.blue4};
`;

const ProcessTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 2rem;
  text-align: center;
  span {
    font-weight: 700;
  }
`;

const ProcessBlock = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
`;

const ProcessBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.2rem;
  position: relative;
`;

const SpeechBubbleImage = styled.img`
  position: absolute;
  top: -4.5rem;
`;

const Process = () => {
  const { ref, animation } = useObserver();

  return (
    <Container>
      <ProcessTitle>
        <p>하이카디 플러스 홀터는</p>
        <span>더 쉽고, 더 간단하니까</span>
      </ProcessTitle>
      <ProcessBlock ref={ref} animate={animation} variants={ContainerAnimation}>
        <ProcessBox>
          <img src="/images/halter/process1.svg" alt="process1" /> 앱 설치하기
        </ProcessBox>
        <img src="/images/halter/arrow.svg" alt="arrow" />

        <ProcessBox>
          <img src="/images/halter/process2.svg" alt="process2" />
          부착 및 연결
        </ProcessBox>
        <img src="/images/halter/arrow.svg" alt="arrow" />

        <ProcessBox>
          <img src="/images/halter/process3.svg" alt="process3" />
          검사하기
        </ProcessBox>
        <img src="/images/halter/arrow.svg" alt="arrow" />

        <ProcessBox>
          <SpeechBubbleImage src="/images/halter/speech-bubble.svg" alt="process4" />
          <img src="/images/halter/process4.svg" alt="process4" /> 판독결과지 확인
        </ProcessBox>
      </ProcessBlock>
    </Container>
  );
};

export default Process;
