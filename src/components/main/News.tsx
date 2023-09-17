import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import { Link } from 'react-router-dom';

const NewsBlock = styled.section`
  background-color: #f8f9fb;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.blue2};
  margin-bottom: 0.5rem;
`;

const StyledSectionDescription = styled(SectionDescription)`
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    margin-bottom: 1.5rem;
  }
`;

const NewsList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 800px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NewsItem = styled.a`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.12);
  width: 30%;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray8};
    font-weight: 600;
    line-height: 1.5;
  }

  @media screen and (max-width: 960px) {
    width: 250px;
  }
`;

const NewsImage = styled.div`
  margin-bottom: 1rem;
  height: 100px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue4};
  color: ${({ theme }) => theme.colors.blue1};
  font-size: 0.75rem;
  font-weight: 700;
`;

const MoreLink = styled(Link)`
  position: absolute;
  bottom: -2.5rem;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    color: ${({ theme }) => theme.colors.blue1};
  }

  img {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (max-width: 960px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const News = () => {
  return (
    <NewsBlock>
      <StyledSectionTitle>언론에 소개된 Hicardi+</StyledSectionTitle>
      <StyledSectionDescription>하이카디 보도자료를 만나보세요</StyledSectionDescription>
      <NewsList>
        <NewsItem href="https://www.news1.kr/articles/5133530" target="_blank">
          <NewsImage>
            <img src="/images/main/news1.png" alt="언론보도 이미지 1" />
          </NewsImage>
          <Badge>보도자료</Badge>
          <h2>원주 의료기기사 ㈜메쥬, 전남대 병원에 하이카디 공급</h2>
        </NewsItem>
        <NewsItem href="http://www.bizwnews.com/news/articleView.html?idxno=50286" target="_blank">
          <NewsImage>
            <img src="/images/main/news2.png" alt="언론보도 이미지 2" />
          </NewsImage>
          <Badge>보도자료</Badge>
          <h2>동아ST, 메쥬와 심전도 원격 모니터링 플랫폼 ‘하이카디(HiCardi)’ 해외 ⋯</h2>
        </NewsItem>
        <NewsItem href="https://www.medigatenews.com/news/2779338147" target="_blank">
          <NewsImage>
            <img src="/images/main/news3.png" alt="언론보도 이미지 3" />
          </NewsImage>
          <Badge>보도자료</Badge>
          <h2>메쥬 하이카디 &quot;단순 홀터 기기 아닌, 모든 진료과 환자 모니터링·질병 예측 장비&quot;</h2>
        </NewsItem>
        <MoreLink to="news">
          <span>자세히 보기</span>
          <img src="/images/icons/blue-right-arrow.svg" alt="오른쪽 화살표" />
        </MoreLink>
      </NewsList>
    </NewsBlock>
  );
};

export default News;
