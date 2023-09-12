import styled from 'styled-components';

const HeadingBlock = styled.div`
  h1 {
    width: 70%;
    margin: 0 auto;
    font-size: 2rem;
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
