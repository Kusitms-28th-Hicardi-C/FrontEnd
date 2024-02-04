import styled from 'styled-components';
import video1 from '../../assets/client/video1.svg';
import video2 from '../../assets/client/video2.svg';
import video3 from '../../assets/client/video3.svg';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation, TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 15%;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const VideoBox = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalMain = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 30rem;
  height: 10rem;
  background-color: white;
  border-radius: 1rem;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  positoin: relative;

  img {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;

interface HowToUseProps {
  howToUseRef: React.RefObject<HTMLDivElement>;
}

const HowToUse = ({ howToUseRef }: HowToUseProps) => {
  const { ref, animation } = useObserver();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Banner ref={howToUseRef}>
      <Title>사용법</Title>
      <VideoBox ref={ref} animate={animation} variants={ContainerAnimation}>
        <Video onClick={handleModalOpen}>
          <img src={video1} alt="video1" />
          <Text>하이카디 착용/연결/작동 방법</Text>
        </Video>
        <Video onClick={handleModalOpen}>
          <img src={video2} alt="video2" />
          <Text>데모장비 세팅법</Text>
        </Video>
        <Video onClick={handleModalOpen}>
          <img src={video3} alt="video3" />
          <Text>하이카디 홀터 사용법</Text>
        </Video>
      </VideoBox>
      {modalOpen && (
        <ModalBackground onClick={handleModalOpen}>
          <ModalMain onClick={handleModalOpen} initial="hidden" animate="visible" variants={TextAnimation}>
            <img src="/images/supports/close.svg" />
            준비중입니다.
          </ModalMain>
        </ModalBackground>
      )}
    </Banner>
  );
};

export default HowToUse;
