import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const TitleStyle = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Title = ({ children }: TitleProps) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
