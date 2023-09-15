import styled from 'styled-components';

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
  gap: 1rem;
  font-size: 1.2rem;
  text-align: center;
  span {
    font-weight: 700;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const ProcessBlock = styled.div`
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
  font-weight: 700;

  img {
    width: 9rem;
    height: 9rem;
  }
`;

const CircleBackground = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  text-align: right;
  font-size: 0.9rem;
  font-weight: 400;
`;

const Solve = () => {
  return (
    <Container>
      <ProcessTitle>
        <Title>이제, 하이카디가 해결할게요!</Title>
        <p>
          HiCardi는 <span>5가지 환자 모니터링 정보</span>를 제공해요.
        </p>
      </ProcessTitle>
      <ProcessBlock>
        <ProcessBox>
          <CircleBackground>
            <img src="/images/monitoring/solve1.svg" alt="solve1" />
          </CircleBackground>
          심전도(ECG)
        </ProcessBox>

        <ProcessBox>
          <CircleBackground>
            <img src="/images/monitoring/solve2.svg" alt="solve2" />
          </CircleBackground>
          심박수
        </ProcessBox>

        <ProcessBox>
          <CircleBackground>
            <img src="/images/monitoring/solve3.svg" alt="solve3" />
          </CircleBackground>
          호흡
        </ProcessBox>

        <ProcessBox>
          <CircleBackground>
            <img src="/images/monitoring/solve4.svg" alt="solve4" />
          </CircleBackground>
          피부온도
        </ProcessBox>

        <ProcessBox>
          <CircleBackground>
            <img src="/images/monitoring/solve5.svg" alt="solve5" />
          </CircleBackground>
          피부온도
        </ProcessBox>
      </ProcessBlock>
      <Description>*피부온도와 활동상태는 의료기기 기능이 아닙니다.</Description>
    </Container>
  );
};

export default Solve;
