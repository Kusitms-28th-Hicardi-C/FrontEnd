import styled from 'styled-components';

const HeaderImageBlock = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HeaderImage = () => {
  return (
    <HeaderImageBlock>
      <img src="/images/placeholder/placeholder-image1.png" alt="임시 헤더 이미지" />
    </HeaderImageBlock>
  );
};

export default HeaderImage;
