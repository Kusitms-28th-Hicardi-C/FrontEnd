import styled from 'styled-components';
import arrow from '../../assets/auth/arrow.svg';

interface IndexProps {
  index: number;
}

const IndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0;
  img {
    width: 0.6rem;
  }
`;

const IndexStyle = styled.div<{ active: boolean }>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => (props.active ? ({ theme }) => theme.colors.blue2 : 'black')};
`;

const Index = ({ index }: IndexProps) => {
  return (
    <IndexBox>
      <IndexStyle active={index === 1}>1. 약관동의</IndexStyle>
      <img src={arrow} alt={arrow} />
      <IndexStyle active={index === 2}>2. 정보입력</IndexStyle>
      <img src={arrow} alt={arrow} />
      <IndexStyle active={index === 3}>3. 가입완료</IndexStyle>
    </IndexBox>
  );
};

export default Index;
