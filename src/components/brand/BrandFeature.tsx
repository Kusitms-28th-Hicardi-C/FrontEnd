import styled from 'styled-components';
import Title from '../common/Title/Title';
import film from '../../assets/brand/film.svg';

const BrandBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 2rem;

  img {
    width: 100%;
  }
`;

const BrandFeature = () => {
  return (
    <BrandBlock>
      <Title>하이카디만의 특장점은?</Title>
      <img src={film} alt="하이카디 특장점" />
    </BrandBlock>
  );
};

export default BrandFeature;
