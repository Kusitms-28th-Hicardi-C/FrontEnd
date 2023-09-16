import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import { Link } from 'react-router-dom';

const SupportBlock = styled.section`
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
  margin: 0 auto;
  padding-top: 4rem;
  text-align: center;

  @media screen and (max-width: 430px) {
    padding-top: 2rem;
  }

  img {
    width: 60%;

    @media screen and (max-width: 568px) {
      width: 90%;
    }
  }
`;

const SupportImages = styled.div`
  text-align: center;

  .gradation {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    img {
      width: 100%;
      height: 150px;
    }

    @media screen and (max-width: 568px) {
      img {
        height: 100px;
      }
    }
  }

  .spacer {
    height: 50px;

    @media screen and (max-width: 568px) {
      height: 30px;
    }
  }

  .more-link-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 1.5rem;
    text-align: center;

    .more-link {
      color: ${({ theme }) => theme.colors.gray5};
      font-size: 0.875rem;
      text-decoration: underline;
    }
  }
`;

const Support = () => {
  return (
    <SupportBlock>
      <SectionTitle>국내 최고 의료기관의 든든한 선택</SectionTitle>
      <SectionDescription>이미 많은 의료기관에서 하이카디를 이용하고 있습니다.</SectionDescription>
      <SupportImages>
        <img src="/images/main/support.png" alt="병원 의료기관 지원사" />
        <div className="gradation">
          <img src="/images/supports/gradation.png" alt="gradation" />
        </div>
        <div className="spacer"></div>
        <div className="more-link-wrapper">
          <Link to="/reviews" className="more-link">
            + 더 알아보기
          </Link>
        </div>
      </SupportImages>
    </SupportBlock>
  );
};

export default Support;
