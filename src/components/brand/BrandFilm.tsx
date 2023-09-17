import styled from 'styled-components';
import Title from '../common/Title/Title';

const BrandFilmBlock = styled.div`
  width: 70%;
  margin: 0 auto 2rem auto;
  padding-bottom: 2rem;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

const BrandFilm = () => {
  return (
    <BrandFilmBlock>
      <Title>브랜드 필름</Title>
      <a
        href="https://drive.google.com/file/d/1mZ9MU4UB9kR9Py-GEN1Wgmk4X4LIT3_f/view"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/images/brand/brandfilm.svg" alt="브랜드 필름" />
      </a>
    </BrandFilmBlock>
  );
};

export default BrandFilm;
