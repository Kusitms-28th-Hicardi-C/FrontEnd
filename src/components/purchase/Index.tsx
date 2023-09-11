import styled from 'styled-components';
import arrow from '../../assets/auth/arrow.svg';

interface IndexProps {
  index: number;
}

const IndexBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 2rem 0;
  img {
    width: 0.6rem;
  }
`;

const IndexStyle = styled.div<{ active: boolean }>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => (props.active ? 'black' : ({ theme }) => theme.colors.gray4)};
  white-space: nowrap;
`;

const Index = ({ index }: IndexProps) => {
  return (
    <IndexBox>
      <IndexStyle active={index === 1}>1. 구매정보 입력</IndexStyle>
      <img src={arrow} alt={arrow} />
      <IndexStyle active={index === 2}>2. 결제정보 확인</IndexStyle>
      <img src={arrow} alt={arrow} />
      <IndexStyle active={index === 3}>3. 결제</IndexStyle>
      <img src={arrow} alt={arrow} />
      <IndexStyle active={index === 4}>4. 주문 완료</IndexStyle>
    </IndexBox>
  );
};

export default Index;
