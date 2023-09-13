import styled from 'styled-components';
import Title from '../common/Title/Title';
import film from '../../assets/brand/film.svg';

const BrandFilmBlock = styled.div`
  width: 70%;
  margin: 0 auto 2rem auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};

  img {
    width: 100%;
  }
`;

const BrandFilm = () => {
  return (
    <BrandFilmBlock>
      <Title>브랜드 필름</Title>
      <img src={film} alt="브랜드 필름" />
    </BrandFilmBlock>
  );
};

export default BrandFilm;
