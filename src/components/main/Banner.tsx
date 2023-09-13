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
  left: 70px;
  transform: translateY(-50%);
  z-index: 5;

  img {
    width: 30px;
  }
`;

const SlideNextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 70px;
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
      <Slider ref={slickRef} dots={false} infinite={true} speed={300} slidesToShow={1} autoplay={true} arrows={false}>
        <BannerItem>
          <img src="/images/banners/banner1.png" alt="banner 1" />
        </BannerItem>
        <BannerItem>
          <img src="/images/banners/banner2.png" alt="banner 2" />
        </BannerItem>
        <BannerItem>
          <img src="/images/banners/banner1.png" alt="banner 3" />
        </BannerItem>
      </Slider>
      <SlideNextArrow type="button" onClick={slideToNext}>
        <img src="/images/icons/banner-right-arrow.svg" alt="배너 오른쪽 화살표" />
      </SlideNextArrow>
    </BannerBlock>
  );
};

export default Banner;
