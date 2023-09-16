import styled, { css } from 'styled-components';
import { useState } from 'react';

import SectionTitle from './SectionTitle';
import Button from '../common/Button/Button';
import mainInfoList from '../../data/main-info.json';

interface ContentProps {
  mobileImageUrl: string;
}

const IntroBlock = styled.section`
  margin: 0 auto;
  padding-top: 3rem;
`;

const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Categories = styled.ul`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 700px) {
    gap: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const MobileBlueWrapper = styled.div`
  @media screen and (max-width: 700px) {
    background-color: ${({ theme }) => theme.colors.blue4};
  }
`;

const Content = styled.div<ContentProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;

  @media screen and (max-width: 700px) {
    height: 300px;
    ${(props) => css`
      background-image: url(${props.mobileImageUrl});
    `}

    background-repeat: no-repeat;
    background-position: right center;
  }

  img {
    width: 50%;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  @media screen and (max-width: 568px) {
    margin-top: 1rem;
  }
`;

const ContentText = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  .content-text-inner {
    display: inline-block;

    h3 {
      width: 100%;
      color: ${({ theme }) => theme.colors.blue1};
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;

      @media screen and (max-width: 1000px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 568px) {
        font-size: 1.5rem;
      }
    }

    .description {
      width: 100%;
      text-align: center;

      p {
        display: inline-block;
        text-align: start;
        font-size: 1.5rem;

        b {
          font-weight: 700;
        }

        @media screen and (max-width: 1000px) {
          font-size: 1.25rem;
        }

        @media screen and (max-width: 568px) {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: start;
    padding-left: 3rem;
  }

  @media screen and (max-width: 420px) {
    padding-left: 2rem;
  }
`;

const Intro = () => {
  const [categoryIndex, setCategoryIndex] = useState(1);
  const categories = ['원격 모니터링', '높은 정확도', '요양급여 적용', '넓은 사용범위', '병원 부담 감소'];

  return (
    <IntroBlock>
      <Heading>
        <SectionTitle>
          간단하게, 명료하게.
          <br />
          확실한 침상감시 패치 하이카디
        </SectionTitle>
      </Heading>
      <Categories>
        {categories.map((category, index) => {
          if (categories.indexOf(category) === categoryIndex) {
            return (
              <Button
                key={index}
                active={true}
                onClick={() => {
                  setCategoryIndex(index);
                }}
              >
                {category}
              </Button>
            );
          }
          return (
            <Button
              key={index}
              onClick={() => {
                setCategoryIndex(index);
              }}
            >
              {category}
            </Button>
          );
        })}
      </Categories>
      <MobileBlueWrapper>
        <Content mobileImageUrl={mainInfoList[categoryIndex].mobileImageUrl}>
          <ContentText>
            <div className="content-text-inner">
              <h3>{mainInfoList[categoryIndex].title}</h3>
              <div className="description">
                <p>
                  {mainInfoList[categoryIndex].text.map((line) => (
                    <>
                      {line}
                      <br />
                    </>
                  ))}
                  <b>
                    {mainInfoList[categoryIndex].boldText.map((line) => (
                      <>
                        {line}
                        <br />
                      </>
                    ))}
                  </b>
                </p>
              </div>
            </div>
          </ContentText>
          <img src={mainInfoList[categoryIndex].imageUrl} alt={mainInfoList[categoryIndex].title} />
        </Content>
      </MobileBlueWrapper>
    </IntroBlock>
  );
};

export default Intro;
