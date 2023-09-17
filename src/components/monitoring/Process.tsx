import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4rem 15%;
  background: ${({ theme }) => theme.colors.box5};
`;

const ProcessTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const ProcessContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2.5rem;
`;

const ProcessBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;

  span {
    font-size: 1.5rem;
  }
`;

const ProcessBox1 = styled(ProcessBox)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.process1};
`;

const ProcessBox2 = styled(ProcessBox)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.process2};
`;

const ProcessBox3 = styled(ProcessBox)`
  background: ${({ theme }) => theme.colors.process3};
`;

const ProcessBox4 = styled(ProcessBox)`
  background: ${({ theme }) => theme.colors.process4};
`;

const ProcessIndex = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const Process = () => {
  const { ref, animation } = useObserver();

  return (
    <Container>
      <ProcessTitle>하이카디 실시간 모니터링 Process</ProcessTitle>
      <ProcessContainer ref={ref} animate={animation} variants={ContainerAnimation}>
        <ProcessBox1>
          <ProcessIndex>1</ProcessIndex>
          <span>부착</span>
          <p>
            <p>패치와 전극을 연결한 후</p>
            <p>흉골에서 심장 쪽으로 기울게 부착</p>
          </p>
        </ProcessBox1>

        <ProcessBox2>
          <ProcessIndex>2</ProcessIndex>
          <span>스마트뷰</span>
          <p>환자&보호자용 모니터링 기기로 실시간으로 정상 동작을 확인</p>
        </ProcessBox2>

        <ProcessBox3>
          <ProcessIndex>3</ProcessIndex>
          <span>클라우드 서버</span>
          <p>데이터 저장과 처리 및 분석, 데이터를 생성하는 서버</p>
        </ProcessBox3>

        <ProcessBox4>
          <ProcessIndex>4</ProcessIndex>
          <span>라이브 스튜디오</span>
          <p>의료진용 모니터링 기기 환자의 이벤트 로그를 실시간 확인</p>
        </ProcessBox4>
      </ProcessContainer>
    </Container>
  );
};

export default Process;
