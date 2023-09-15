import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const TitleStyle = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Title = ({ children, ...rest }: TitleProps) => {
  return <TitleStyle {...rest}>{children}</TitleStyle>;
};

export default Title;
