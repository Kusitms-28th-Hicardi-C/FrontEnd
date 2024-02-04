import styled from 'styled-components';

interface SectionHeadingProps {
  h1: string;
  span: string;
}

const HeadingBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h1 {
    display: inline-block;
    font-size: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

const Heading = ({ h1, span }: SectionHeadingProps) => {
  return (
    <HeadingBlock>
      <h1>{h1}</h1>
      <span>{span}</span>
    </HeadingBlock>
  );
};

export default Heading;
