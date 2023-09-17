import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 20%;
  gap: 2rem;
`;

const ExplanationBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
`;

const ExplanationTextBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  margin-left: 3rem;
`;

const ExplanationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ExplanationBigText = styled(ExplanationText)`
  font-size: 1.8rem;
  span {
    font-weight: 700;
  }
`;

const ExplanationSmallText = styled(ExplanationText)`
  font-size: 1.1rem;
`;

const Explanation = () => {
  const animationRefs = [];
  const refs = [];

  for (let i = 0; i < 3; i++) {
    const { ref, animation } = useObserver();
    animationRefs.push(animation);
    refs.push(ref);
  }

  return (
    <Container>
      <ExplanationBox ref={refs[0]} animate={animationRefs[0]} variants={ContainerAnimation}>
        <ExplanationTextBox>
          <ExplanationBigText>
            <p>
              <span>심전도 침상감시</span>로 수가청구 가능한
            </p>
            <p>
              <span>국내 유일</span> 디지털 헬스케어 기기
            </p>
          </ExplanationBigText>
          <ExplanationSmallText>
            <p>9개의 임상시험으로 심평원 수가를 받은</p>
            <p>믿음직한 2등급 의료기기니까</p>
          </ExplanationSmallText>
        </ExplanationTextBox>
        <img src="/images/monitoring/explanation1.svg" alt="explanation1" />
      </ExplanationBox>

      <ExplanationBox ref={refs[1]} animate={animationRefs[1]} variants={ContainerAnimation}>
        <img src="/images/monitoring/explanation2.svg" alt="explanation2" />
        <ExplanationTextBox>
          <ExplanationBigText>
            <span>무선이라 간단하니까,</span>
            <p>환자 모니터링 수준을</p>
            <span>10%에서 90%</span>까지 개선
          </ExplanationBigText>
          <ExplanationSmallText>
            <p>노이즈 걱정 없이 환자 데이터 실시간 연속 측정</p>
            <p>위중도를 더 정확하게 판단하는 하이카디</p>
          </ExplanationSmallText>
        </ExplanationTextBox>
      </ExplanationBox>

      <ExplanationBox ref={refs[2]} animate={animationRefs[2]} variants={ContainerAnimation}>
        <ExplanationTextBox>
          <ExplanationBigText>
            <p>더 넓은 활용도로</p>
            <span>텔레메트리 사각지대 해결</span>
          </ExplanationBigText>
          <ExplanationSmallText>
            <p>간호통합병동, 격리병동, 일반병동, 회복실도 사용 가능</p>
            <p>기존 텔레메트리 장비 이용이 어렵던 병동까지 실시간 모니터링</p>
          </ExplanationSmallText>
        </ExplanationTextBox>
        <img src="/images/monitoring/explanation3.svg" alt="explanation3" />
      </ExplanationBox>
    </Container>
  );
};

export default Explanation;
