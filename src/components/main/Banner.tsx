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

const BannerItem = styled.div`
  img {
    width: 100%;
  }
`;

const Banner = () => {
  const slickRef = useRef<Slider>(null);

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
            <img src="/images/banners/banner1.svg" alt="banner 1" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner2.svg" alt="banner 2" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner3.svg" alt="banner 3" />
          </BannerItem>
          <BannerItem>
            <img src="/images/banners/banner4.svg" alt="banner 3" />
          </BannerItem>
        </Slider>
      </SliderWrapper>
    </BannerBlock>
  );
};

export default Banner;
