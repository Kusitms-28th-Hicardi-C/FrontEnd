import styled from 'styled-components';
import Button from '../common/Button/Button';
import { useState } from 'react';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 15%;
  gap: 2rem;
`;

const CoreTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContentBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 100%;
`;

const ContentTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.colors.blue2};
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const CoreFunction = () => {
  const [active, setActive] = useState(0);

  const handleButtonClick = (index: number) => {
    setActive(index);
  };

  return (
    <Container>
      <CoreTitle>하이카디의 핵심 기능</CoreTitle>
      <ButtonBox>
        <Button active={active === 0} onClick={() => handleButtonClick(0)}>
          웨어러블 스마트 패치
        </Button>
        <Button active={active === 1} onClick={() => handleButtonClick(1)}>
          스마트뷰 환자상태 모니터링
        </Button>
        <Button active={active === 2} onClick={() => handleButtonClick(2)}>
          라이브 스튜디오 중앙 모니터링
        </Button>
      </ButtonBox>

      {active === 0 && (
        <ContentBox initial="hidden" animate="visible" variants={TextAnimation} key={1}>
          <img src="/images/monitoring/core-function1.svg" alt="core-function1" />
          <ContentText>
            <ContentTitle>
              <span>웨어러블</span> 스마트 패치
            </ContentTitle>
            <Content>
              <p>
                • HiCardi® 시스템의 핵심으로, 부정맥(15가지), 심전도(ECG), 호흡, 피부온과 같은 환자의 생리학적 데이터를
                실시간으로 연속 측정
              </p>
              <p>• IP67 방수 등급을 받아 샤워 등 일상 생활시 연속 측정으로 더 정확한 데이터</p>
              <p>• 작고 가벼운 무선 디자인으로 흉부에 쉽고 간편하게 부착</p>
              <p>• 특수 소재 전극을 사용해 피부 트러블이 적어 착용 시 이물감이 적음</p>
            </Content>
          </ContentText>
        </ContentBox>
      )}

      {active === 1 && (
        <ContentBox initial="hidden" animate="visible" variants={TextAnimation} key={2}>
          <img src="/images/monitoring/core-function2.svg" alt="core-function2" />
          <ContentText>
            <ContentTitle>
              <span>스마트뷰</span> 환자상태 모니터링
            </ContentTitle>
            <Content>
              <p>• 모바일 앱으로, 언제 어디서나 환자의 실시간 상태를 모니터링</p>
              <p>
                • 스마트패치에서 전달된 부정맥, 심전도, 호흡, 피부온, 활동상태 등의 생리학적 데이터를 서버로 전달하는
                게이트 웨이 기능
              </p>
              <p>• 앱 스토어에서 누구나 쉽게 다운로드</p>
            </Content>
          </ContentText>
        </ContentBox>
      )}

      {active === 2 && (
        <ContentBox initial="hidden" animate="visible" variants={TextAnimation} key={3}>
          <img src="/images/monitoring/core-function3.svg" alt="core-function3" />
          <ContentText>
            <ContentTitle>
              <span>라이브 스튜디오</span> 중앙 모니터링
            </ContentTitle>
            <Content>
              <p>• 모바일 앱으로, 언제 어디서나 환자의 실시간 상태를 모니터링</p>
              <p>
                • 스마트패치에서 전달된 부정맥, 심전도, 호흡, 피부온, 활동상태 등의 생리학적 데이터를 서버로 전달하는
                게이트 웨이 기능
              </p>
              <p>• 앱 스토어에서 누구나 쉽게 다운로드</p>
            </Content>
          </ContentText>
        </ContentBox>
      )}
    </Container>
  );
};

export default CoreFunction;
