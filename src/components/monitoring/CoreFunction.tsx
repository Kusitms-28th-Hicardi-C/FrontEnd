import styled from 'styled-components';
import Button from '../common/Button/Button';

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

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const ContentTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
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
  return (
    <Container>
      <CoreTitle>하이카디의 핵심 기능</CoreTitle>
      <ButtonBox>
        <Button active>웨어러블 스마트 패치</Button>
        <Button>스마트뷰 환자상태 모니터링</Button>
        <Button>라이브 스튜디오 중앙 모니터링</Button>
      </ButtonBox>
      <ContentBox>
        <img src="/images/monitoring/smartpatch.svg" alt="smartpatch" />
        <ContentText>
          <ContentTitle>웨어러블 스마트 패치</ContentTitle>
          <Content>
            <p>
              • HiCardi® 시스템의 핵심으로, 부정맥(15가지), 심전도(ECG), 호흡, 피부온과 같은 환자의 생리학적 데이터를
              실시간으로 연속 측정
            </p>
            <p>IP67 방수 등급을 받아 샤워 등 일상 생활시 연속 측정으로 더 정확한 데이터</p>
            <p>작고 가벼운 무선 디자인으로 흉부에 쉽고 간편하게 부착</p>
            <p>특수 소재 전극을 사용해 피부 트러블이 적어 착용 시 이물감이 적음</p>
          </Content>
        </ContentText>
      </ContentBox>
    </Container>
  );
};

export default CoreFunction;
