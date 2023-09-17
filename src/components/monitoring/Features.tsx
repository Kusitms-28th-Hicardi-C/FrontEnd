import styled from 'styled-components';
import featureList from '../../data/feature.json';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 5rem 15%;
  background-color: ${({ theme }) => theme.colors.box5};
`;

const FeaturesTitle = styled.div`
  font-size: 1.8rem;
  span {
    font-weight: 700;
  }
`;

const FeatureBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 100%;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 2rem 3.5rem;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.gray3};
  background: ${({ theme }) => theme.colors.white};

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
  }
`;

const FeatureNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue1};
`;

const Features = () => {
  const { ref, animation } = useObserver();

  return (
    <Container>
      <FeaturesTitle>
        하이카디 <span>홀터</span> 솔루션만의 <span>특장점</span>
      </FeaturesTitle>
      <FeatureBox ref={ref} animate={animation} variants={ContainerAnimation}>
        {featureList.map((feature) => (
          <Feature key={feature.id}>
            <FeatureNumber>{feature.id}</FeatureNumber>
            <span>{feature.title}</span>
            <p>{feature.description}</p>
          </Feature>
        ))}
      </FeatureBox>
    </Container>
  );
};

export default Features;
