import styled from 'styled-components';
import hicardiPlusList from '../../data/hicardi-plus.json';

const Container = styled.div`
  width: 45%;
  margin: 0 auto;
  padding: 2rem 0 4rem 0;
`;

const PlusListTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

const PlusListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const PlusListItem = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.blue4};
  color: ${({ theme }) => theme.colors.blue1};
  font-size: 1.2rem;
`;

const PlusList = () => {
  return (
    <Container>
      <PlusListTitle>
        <p>하이카디 플러스로</p>
        <p>15가지 유형의 부정맥을 탐색하세요</p>
      </PlusListTitle>
      <PlusListBox>
        {hicardiPlusList.map((item: string, index: number) => (
          <PlusListItem key={index}>{item}</PlusListItem>
        ))}
      </PlusListBox>
    </Container>
  );
};

export default PlusList;
