import styled from 'styled-components';
import Title from '../common/Title/Title';

const BrandFilmBlock = styled.div`
  width: 70%;
  margin: 0 auto 2rem auto;
  padding-bottom: 2rem;

  video {
    width: 100%;
    cursor: pointer;
  }
`;
const BrandFilm = () => {
  return (
    <BrandFilmBlock>
      <Title>브랜드 필름</Title>
      <iframe
        src="https://drive.google.com/file/d/1mZ9MU4UB9kR9Py-GEN1Wgmk4X4LIT3_f/preview"
        width="100%"
        height="520rem"
      ></iframe>
    </BrandFilmBlock>
  );
};

export default BrandFilm;
