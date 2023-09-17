import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 20%;
  gap: 2rem;
`;

const SolveTitle = styled.div`
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SolveBox = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
`;

const SolveTextBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-left: 2rem;
`;

const SolveText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const SolveBigText = styled(SolveText)`
  font-size: 1.6rem;
  span {
    font-weight: 700;
  }
`;

const SolveSmallText = styled(SolveText)`
  font-size: 1.1rem;
`;

const Solve = () => {
  return (
    <Container>
      <SolveTitle>이제, 하이카디가 해결할게요!</SolveTitle>
      <SolveBox>
        <SolveTextBox>
          <SolveBigText>
            <p>
              간편한 <span>무선 장비로</span>
            </p>
            <p>불편함은 줄이고</p>
            <p>부정맥 진단율은 높였어요</p>
          </SolveBigText>
          <SolveSmallText>
            <p>심전도 노이즈 문제 없이</p>
            <p>장기간 검사가 가능해 더 높은 데이터 정확성</p>
          </SolveSmallText>
        </SolveTextBox>
        <img src="/images/halter/solve1.svg" alt="solve1" />
      </SolveBox>

      <SolveBox>
        <img src="/images/halter/solve2.svg" alt="solve2" />
        <SolveTextBox>
          <SolveBigText>
            <p>부정맥 지식이 없어도 괜찮아요</p>
            <span>AI가 자동 분석해주는</span>
            <span>원격 분석 레포트</span>
          </SolveBigText>
          <SolveSmallText>
            <p>주요 부정맥 이벤트를 쉽게 확인할 수 있는 진단 Report 발행</p>
            <p>
              <span>부정맥 전문의의 원격판독 서비스</span> 제공
            </p>
          </SolveSmallText>
        </SolveTextBox>
      </SolveBox>

      <SolveBox>
        <SolveTextBox>
          <SolveBigText>
            <p>
              <span>인증받은 방수 기능</span>으로
            </p>
            <p>떼고 붙일 필요 없이</p>
            <p>연속 측정할 수 있어요</p>
          </SolveBigText>
          <SolveSmallText>
            <p>
              <span>간단한 샤워가 가능</span>하고 탈부착 시간까지 적은
            </p>
            <p>환자를 생각한 가벼운 의료기기</p>
          </SolveSmallText>
        </SolveTextBox>
        <img src="/images/halter/solve3.svg" alt="solve3" />
      </SolveBox>
    </Container>
  );
};

export default Solve;
