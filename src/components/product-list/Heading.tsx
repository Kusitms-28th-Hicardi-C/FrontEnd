import styled from 'styled-components';

const HeadingBlock = styled.div`
  width: 70%;
  margin: 0 auto;

  h1 {
    padding-top: 4rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Heading = () => {
  return (
    <HeadingBlock>
      <h1>하이카디 제품 둘러보기</h1>
    </HeadingBlock>
  );
};

export default Heading;
