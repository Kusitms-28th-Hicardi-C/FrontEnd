import styled from 'styled-components';
import Button from '../common/Button/Button';
import Title from '../common/Title/Title';
import { useState } from 'react';

const CustomerListBlock = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const GrayTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 1.1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0 4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
`;

const AdvancedHospitalBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  place-items: center;
  padding: 0 7rem;
`;

const HospitalBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
`;

const Box = styled.div`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.gray6};
`;

const CustomerList = () => {
  const [active, setActive] = useState(0);

  const handleOptionClick = (index: number) => {
    setActive(index);
  };

  return (
    <CustomerListBlock>
      <Title>고객사 목록</Title>
      <ButtonBox>
        <Button active={active === 0} onClick={() => handleOptionClick(0)}>
          전체
        </Button>
        <Button active={active === 1} onClick={() => handleOptionClick(1)}>
          상급 종합병원
        </Button>
        <Button active={active === 2} onClick={() => handleOptionClick(2)}>
          종합병원
        </Button>
      </ButtonBox>

      {(active === 0 || active === 1) && (
        <Content>
          <GrayTitle>상급종합병원</GrayTitle>
          <AdvancedHospitalBox>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </AdvancedHospitalBox>
        </Content>
      )}

      {(active === 0 || active === 2) && (
        <Content>
          <GrayTitle>종합병원</GrayTitle>
          <HospitalBox>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </HospitalBox>
        </Content>
      )}
    </CustomerListBlock>
  );
};

export default CustomerList;
