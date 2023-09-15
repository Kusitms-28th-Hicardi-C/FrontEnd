import styled from 'styled-components';

interface HeaderImageProps {
  imageUrl: string;
  alt: string;
}

const HeaderImageBlock = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HeaderImage = ({ imageUrl, alt }: HeaderImageProps) => {
  return (
    <HeaderImageBlock>
      <img src={imageUrl} alt={alt} />
    </HeaderImageBlock>
  );
};

export default HeaderImage;
