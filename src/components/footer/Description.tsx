import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 3rem 15%;
  background-color: ${({ theme }) => theme.colors.gray8};
  color: ${({ theme }) => theme.colors.white};
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Company = styled.div`
  font-size: 0.8rm;
`;

const Description = () => {
  return (
    <Container>
      <LogoText>로고</LogoText>
      <CompanyBox>
        <Company>회사정보1</Company>
        <Company>회사정보2</Company>
        <Company>회사정보3</Company>
      </CompanyBox>
      <Company>copyright 2023 회사명. All rights reserved</Company>
    </Container>
  );
};

export default Description;
