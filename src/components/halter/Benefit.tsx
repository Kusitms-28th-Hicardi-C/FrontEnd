import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BenefitTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const BenefitIndex = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.box6};
  border-radius: 10px;
  padding: 0.8rem 1rem;

  li {
    width: 100%;
  }
`;

const BenefitItem = styled(BenefitIndex)`
  background: ${({ theme }) => theme.colors.white};
  margin-top: 0.8rem;
`;

const Benefit = () => {
  return (
    <Container>
      <BenefitTitle>HiCardi® Telemetry 보험급여</BenefitTitle>
      <BenefitIndex>
        <li>수가코드</li>
        <li>분류번호</li>
        <li>명칭/산정명칭</li>
        <li>급여구분</li>
        <li>단가(의원)</li>
        <li>단가(병원)</li>
      </BenefitIndex>
      <BenefitItem>
        <li>E6544</li>
        <li>나725다(1)</li>
        <li>심전도침상감시 [1일당]</li>
        <li>급여</li>
        <li>15,800원</li>
        <li>13,730원</li>
      </BenefitItem>
    </Container>
  );
};

export default Benefit;
