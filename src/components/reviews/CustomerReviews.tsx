import styled from 'styled-components';
import { useState } from 'react';

interface CategoryProps {
  isActive: boolean;
}

const CustomerReviewsBlock = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const ReviewTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1rem 0 2.5rem 0;
`;

const CategoryBox = styled.ul`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  margin: 0.5rem 0 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue1};
`;

const Category = styled.li<CategoryProps>`
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 1.1rem;
  padding-bottom: 0.5rem;

  ${({ isActive, theme }) =>
    isActive &&
    `color: ${theme.colors.blue1}; 
     font-weight: bold; 
     border-bottom: 4px solid ${theme.colors.blue1}; 
    `}
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.blue1};
  }
`;

const ContentBox = styled.div`
  display: flex;
  margin-bottom: 5rem;

  img {
    width: 40%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 1.5rem;
  }
`;

const ContentText = styled.div`
  font-size: 1.15rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
  line-height: 1.5rem;

  span {
    font-weight: 700;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 4rem;
`;

const CustomerReviews = () => {
  const [active, setActive] = useState(0);

  const handleOptionClick = (index: number) => {
    setActive(index);
  };

  return (
    <CustomerReviewsBlock>
      <ReviewTitle>고객 리뷰</ReviewTitle>
      <CategoryBox>
        <Category isActive={active === 0} onClick={() => handleOptionClick(0)}>
          서울삼성병원 A 원장
        </Category>
        <Category isActive={active === 1} onClick={() => handleOptionClick(1)}>
          서울아산병원 B 원장
        </Category>
        <Category isActive={active === 2} onClick={() => handleOptionClick(2)}>
          종합의료업체 C사
        </Category>
      </CategoryBox>

      <ContentBox>
        {active === 0 && (
          <ContentContainer>
            <img src="/images/reviews/seoul.svg" alt="서울삼성병원 A원장" />
            <Content>
              <p>하이카디로 응급상황 실시간 확인이 용이해졌어요!</p>
              <ContentText>
                저희 병원 같은 경우는 병상 수가 워낙 많은 데다 권역응급의료센터로 지정되어 응급실에서 다루어야 할
                영유아들이 많은 편입니다. 의사 수는 한정되어 있는데, 환아를 제한된 의료진이 모두 주시할 수 없는 점이 늘
                고민이었어요. 특히{' '}
                <span>기존 환자 감시장치의 경우, 영유아가 사용하기에는 너무 무겁고 커 사용이 어렵다는 단점</span>이
                있었죠.
              </ContentText>
              <ContentText>
                하지만 <span>영유아 Vital Sign과 알림 기능을 탑재하고 있는 하이카디</span>를 도입하고 난 후에는 이 모든
                문제가 해결됐어요! 하이카디 패치는 <span>가볍고 정확해서</span> 영유아에게 사용해도 무리가 없고,
                <span>필요한 기능을 딱맞게 제공</span>하더라구요.
              </ContentText>
            </Content>
          </ContentContainer>
        )}

        {active === 1 && (
          <ContentContainer>
            <img src="/images/reviews/korea.svg" alt="고대안암병원 가나다 원장" />
            <Content>
              <p>스마트 병원 완성, 하이카디로 시도하세요!</p>
              <ContentText>
                저희 고대안암병원은 이번에 신병동을 완공하며 일반병동에 하이카디를 도입했습니다. 국내 유수의
                종합병원이지만, 일반병동 환자에게까지 환자 감시기기를 배정하는 건 비용적, 운용 상황적으로 매우 복잡한
                일이거든요. 그래서 기존에는 <span>일반병동 환자 모니터링 수단이 마땅치 않았습니다.</span>
              </ContentText>
              <ContentText>
                하이카디는 기존 환자 감시기기 대비
                <span>저렴한 가격일 뿐 아니라, 여러 기기를 통합해 운영할 수 있는 네트워크 체계를 기본 제공</span>하고
                있어 스마트 병원에 필수적인 환자감시망을 손쉽게 확보할 수 있게 했어요.
              </ContentText>
            </Content>
          </ContentContainer>
        )}

        {active === 2 && (
          <ContentContainer>
            <img src="/images/reviews/chungnam.svg" alt="충남대병원 라마바 간호사" />
            <Content>
              <p>간호사 수가 부족한 병동, 하이카디가 제격입니다</p>
              <ContentText>
                저는 노인병동에서 근무하고 있는데, 저희 병동은 인력 사정상 야간(나이트) 근무를 두 명이서 돌아요. 전담
                전공의가 있긴 하지만, 그래도 세 명이서 50명이 넘는 환자들을 관리한다는 게 쉬운 일이 아니거든요.
                <span>심지어는 밤에 주무시다 돌아가시는 경우도 잦구요.</span>
              </ContentText>
              <ContentText>
                하이카디는 저희의 열악한 상황에 딱 맞는 솔루션이었어요.
                <span>스테이션에 설치된 모니터 하나에서 많은 환자들의 심전도를 일정하게 확인</span>할 수 있으니, 야간
                순찰 사이 비는 시간에도 이상 있는 환자를 바로 체크할 수 있거든요.
              </ContentText>
            </Content>
          </ContentContainer>
        )}
      </ContentBox>
    </CustomerReviewsBlock>
  );
};

export default CustomerReviews;
