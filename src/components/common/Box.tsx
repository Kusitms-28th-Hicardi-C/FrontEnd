import styled from 'styled-components';

interface BoxBlockProps {
  children: React.ReactNode;
  background: string;
}

const BoxBlock = styled.div<BoxBlockProps>`
  background: ${(props) => props.background};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  margin: 1rem 0;

  img {
    width: 7rem;
    height: 7rem;
  }
`;

const Box = ({ children, background }: BoxBlockProps) => {
  return <BoxBlock background={background}>{children}</BoxBlock>;
};

export default Box;
