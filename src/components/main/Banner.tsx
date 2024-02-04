import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const BannerBlock = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
`;

const SliderWrapper = styled.div`
  .slick-dots {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-56px);
    z-index: 60;
    width: 112px;

    li {
      margin: 0 0.25rem;

      button {
        padding: 0;

        &::before {
          opacity: 1;
          color: #c0c0c0;
          font-size: 1rem;
        }
      }
    }

    li.slick-active {
      button {
        &::before {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .slick-dots {
      top: 2%;
    }
  }
`;

const SlidePrevArrow = styled.button`
  width: 15px;
  height: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SlideNextArrow = styled.button`
  width: 15px;
  height: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BannerItem = styled.div`
  img {
    width: 100%;
  }

  .desktop-banner {
    display: block;
  }

  .mobile-banner {
    display: none;
  }

  @media screen and (max-width: 480px) {
    .desktop-banner {
      display: none;
    }

    .mobile-banner {
      display: block;
    }
  }
`;

const ArrowArea = styled.div`
  position: absolute;
  bottom: 11%;
  z-index: 50;
  left: 50%;
  transform: translateX(-79px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    top: 3%;
    height: 20px;
  }
`;

const ArrowSpacer = styled.div`
  width: 128px;
  height: 100%;
`;

const Banner = () => {
  const slickRef = useRef<Slider>(null);

  const slideToPrev = () => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  };

  const slideToNext = () => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  };

  return (
    <BannerBlock>
      <SliderWrapper>
        <Slider
          ref={slickRef}
          dots={true}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={5000}
          arrows={false}
          pauseOnHover={false}
        >
          <BannerItem>
            <img className="desktop-banner" src="/images/banners/banner1.svg" alt="banner 1" />
            <img className="mobile-banner" src="/images/banners/banner-mobile1.svg" alt="banner 1" />
          </BannerItem>
          <BannerItem>
            <img className="desktop-banner" src="/images/banners/banner2.svg" alt="banner 2" />
            <img className="mobile-banner" src="/images/banners/banner-mobile2.svg" alt="banner 1" />
          </BannerItem>
          <BannerItem>
            <img className="desktop-banner" src="/images/banners/banner3.svg" alt="banner 3" />
            <img className="mobile-banner" src="/images/banners/banner-mobile3.svg" alt="banner 1" />
          </BannerItem>
          <BannerItem>
            <img className="desktop-banner" src="/images/banners/banner4.svg" alt="banner 4" />
            <img className="mobile-banner" src="/images/banners/banner-mobile4.svg" alt="banner 1" />
          </BannerItem>
        </Slider>
        <ArrowArea>
          <SlidePrevArrow onClick={slideToPrev}>
            <img src="/images/icons/white-left-arrow-fill.svg" alt="배너 오른쪽 화살표" />
          </SlidePrevArrow>
          <ArrowSpacer />
          <SlideNextArrow onClick={slideToNext}>
            <img src="/images/icons/white-right-arrow-fill.svg" alt="배너 오른쪽 화살표" />
          </SlideNextArrow>
        </ArrowArea>
      </SliderWrapper>
    </BannerBlock>
  );
};

export default Banner;
