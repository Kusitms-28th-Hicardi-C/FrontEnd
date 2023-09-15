import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue4};
  padding: 4rem 30%;
`;

const SideEffectBlock = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SideEffectTitle = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  span {
    font-weight: 700;
  }
`;

const SideEffectCircle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 1.5rem 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    width: 100%;
  }
`;

const SideEffectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  gap: 0.5rem;
  padding: 1.4rem 2rem;
  background: ${({ theme }) => theme.colors.white};
  margin: 1.8rem 0;
  width: 100%;
  white-space: nowrap;
`;

const SideEffectTop = styled(SideEffectBox)`
  border-radius: 1rem 1rem 1rem 0;
`;

const SideEffectBottom = styled(SideEffectBox)`
  border-radius: 1rem 1rem 0 1rem;
  align-items: flex-end;
`;

const SideEffect = () => {
  return (
    <Container>
      <SideEffectTitle>
        기존 홀터 장비의 <span>복잡한 구조와 부작용 문제</span>
      </SideEffectTitle>
      <SideEffectBlock>
        <SideEffectCircle>
          <p>환자</p>
          <img src="/images/halter/patient.svg" alt="환자" />
        </SideEffectCircle>
        <SideEffectTop>
          <p>• 착용해야 하는 장비가 무겁고 불편해요</p>
          <p>• 피부 트러블이 자주 나서 오래 착용할 수 없어요</p>
        </SideEffectTop>
      </SideEffectBlock>

      <SideEffectBlock>
        <SideEffectBottom>
          <p>• 부정맥 전문의가 아니면 분석이 어려워요</p>
          <p>• 처방할 수 있는 검사수에 한계가 있어요</p>
        </SideEffectBottom>
        <SideEffectCircle>
          <p>병원</p>
          <img src="/images/halter/hospital.svg" alt="병원" />
        </SideEffectCircle>
      </SideEffectBlock>
    </Container>
  );
};

export default SideEffect;
