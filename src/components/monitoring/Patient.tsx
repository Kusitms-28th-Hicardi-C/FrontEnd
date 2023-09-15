import styled from 'styled-components';

const Container = styled.div`
  width: 55%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  img {
    width: 7rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 2rem;
  text-align: center;
  span {
    font-weight: 700;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.5rem;
  text-align: center;
`;

const Content = styled.div`
  padding: 2.4rem 4rem;
  width: 70%;
  background: ${({ theme }) => theme.colors.box3};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  span {
    font-weight: 700;
  }
`;

const ContentLeft = styled(Content)`
  border-radius: 20px 20px 20px 0;
`;

const ContentRight = styled(Content)`
  border-radius: 20px 20px 0 20px;
  margin-left: auto;
  background: #a1ddff;
`;

const Patient = () => {
  return (
    <Container>
      <img src="/images/monitoring/warning.svg" alt="warning" />
      <Title>
        <p>불편한 환자감시 장치,</p>
        <span>아직도 사용하고 계신가요?</span>
      </Title>
      <ContentBox>
        <ContentLeft>
          호흡, 혈압 등 <span>일부 정보만 확인할 수 있음</span>
        </ContentLeft>
        <ContentRight>
          심전도 모니터링 없는 <span>진료 사각지대 발생</span>
        </ContentRight>
        <ContentLeft>
          중환자실과 수술실이 아니라면 <span>비효율적</span>
        </ContentLeft>
      </ContentBox>
    </Container>
  );
};

export default Patient;
