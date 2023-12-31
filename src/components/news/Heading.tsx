import styled from 'styled-components';

const HeadingBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.blue1};
  }

  @media screen and (max-width: 992px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const Heading = () => {
  return (
    <HeadingBlock>
      <h1>뉴스</h1>
      <p>하이카디의 주요 언론 보도를 확인하실 수 있습니다.</p>
    </HeadingBlock>
  );
};

export default Heading;
