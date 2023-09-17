import styled from 'styled-components';
import video1 from '../../assets/client/video1.svg';
import video2 from '../../assets/client/video2.svg';
import video3 from '../../assets/client/video3.svg';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

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

interface HowToUseProps {
  howToUseRef: React.RefObject<HTMLDivElement>;
}

const HowToUse = ({ howToUseRef }: HowToUseProps) => {
  const { ref, animation } = useObserver();

  return (
    <Banner ref={howToUseRef}>
      <Title>사용법</Title>
      <VideoBox ref={ref} animate={animation} variants={ContainerAnimation}>
        <Video>
          <img src={video1} alt="video1" />
          <Text>하이카디 착용/연결/작동 방법</Text>
        </Video>
        <Video>
          <img src={video2} alt="video2" />
          <Text>데모장비 세팅법</Text>
        </Video>
        <Video>
          <img src={video3} alt="video3" />
          <Text>하이카디 홀터 사용법</Text>
        </Video>
      </VideoBox>
    </Banner>
  );
};

export default HowToUse;
