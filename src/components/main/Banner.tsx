import styled from 'styled-components';

import banner1 from '../../assets/banners/banner1.png';

const BannerBlock = styled.section`
  width: 70%;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

const Banner = () => {
  return (
    <BannerBlock>
      <img src={banner1} alt="banner 1" />
    </BannerBlock>
  );
};

export default Banner;
