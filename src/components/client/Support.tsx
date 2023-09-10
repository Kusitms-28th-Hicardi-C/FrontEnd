import styled from 'styled-components';
import howToUseIcon from '../../assets/client/howToUse.svg';
import questionMarkIcon from '../../assets/client/questionMark.svg';
import productIcon from '../../assets/client/product.svg';

const Support = () => {
  return (
    <Banner>
      <Title>고객 지원</Title>
      <SubTitle>하이카디 사용법 영상과 메뉴얼을 확인하세요.</SubTitle>
      <ButtonBox>
        <Button>
          <img src={howToUseIcon} alt="howToUse" />
          사용법
        </Button>
        <Button>
          <img src={questionMarkIcon} alt="questionMark" />
          FAQ
        </Button>
        <Button>
          <img src={productIcon} alt="product" />
          제품 소개서
        </Button>
      </ButtonBox>
    </Banner>
  );
};

export default Support;

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue4};
  padding: 3rem 0;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.div`
  margin-bottom: 2.2rem;
  font-size: 1.2rem;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const Button = styled.div`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue0};
  background: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
