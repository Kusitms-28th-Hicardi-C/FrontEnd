import styled from 'styled-components';
import video from '../../assets/client/video.svg';

const HowToUse = () => {
  return (
    <Banner>
      <Title>사용법</Title>
      <VideoBox>
        <Video>
          <img src={video} alt="video" />
          <Text>하이카디 착용/연결/작동 방법</Text>
        </Video>
        <Video>
          <img src={video} alt="video" />
          <Text>하이카디 착용/연결/작동 방법</Text>
        </Video>
        <Video>
          <img src={video} alt="video" />
          <Text>하이카디 착용/연결/작동 방법</Text>
        </Video>
      </VideoBox>
    </Banner>
  );
};

export default HowToUse;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 16rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const VideoBox = styled.div`
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
