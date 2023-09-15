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
  margin-bottom: 1.5rem;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 4rem 0 1rem 0;
`;

const CustomerTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const TitleDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray4};
`;

const GrayTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 1.3rem;
  font-weight: 400;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0 5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  margin-bottom: 1rem;
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
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

const Box = styled.img`
  width: 100%;
  height: 4rem;
  justify-self: center;
  align-self: center;
`;

const CustomerList = () => {
  const [active, setActive] = useState(0);

  const advancedHospitalList = [];
  for (let i = 1; i <= 7; i++) {
    advancedHospitalList.push(`/images/reviews/advancedHospital/advanced${i}.svg`);
  }
  const hospitalList: string[] = [];
  for (let i = 1; i <= 24; i++) {
    hospitalList.push(`/images/reviews/hospital/hospital${i}.svg`);
  }

  const handleOptionClick = (index: number) => {
    setActive(index);
  };

  return (
    <CustomerListBlock>
      <TitleBox>
        <CustomerTitle>고객사 목록</CustomerTitle>
        <TitleDescription>* 2023. 8.기준</TitleDescription>
      </TitleBox>
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
            {advancedHospitalList.map((advancedHospital: string, idx: number) => (
              <Box src={advancedHospital} key={idx} alt="advancedHospital" />
            ))}
          </AdvancedHospitalBox>
        </Content>
      )}

      {(active === 0 || active === 2) && (
        <Content>
          <GrayTitle>종합병원</GrayTitle>
          <HospitalBox>
            {hospitalList.map((hospital: string, idx: number) => (
              <Box src={hospital} key={idx} alt="hospital" />
            ))}
          </HospitalBox>
        </Content>
      )}
    </CustomerListBlock>
  );
};

export default CustomerList;
