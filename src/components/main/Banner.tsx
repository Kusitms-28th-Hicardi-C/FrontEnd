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

const SlidePrevArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 5;

  img {
    width: 30px;
  }
`;

const SliderWrapper = styled.div`
  .slick-dots {
    position: absolute;
    bottom: 10%;

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
`;

const SlideNextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 5;

  img {
    width: 30px;
  }
`;

const BannerItem = styled.div`
  img {
    width: 100%;
  }
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
      <SlidePrevArrow type="button" onClick={slideToPrev}>
        <img src="/images/icons/banner-left-arrow.svg" alt="배너 왼쪽 화살표" />
      </SlidePrevArrow>
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
            <img src="/images/banners/banner1.png" alt="banner 1" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner2.png" alt="banner 2" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner1.png" alt="banner 3" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner1.png" alt="banner 3" />
          </BannerItem>
        </Slider>
      </SliderWrapper>
      <SlideNextArrow type="button" onClick={slideToNext}>
        <img src="/images/icons/banner-right-arrow.svg" alt="배너 오른쪽 화살표" />
      </SlideNextArrow>
    </BannerBlock>
  );
};

export default Banner;
