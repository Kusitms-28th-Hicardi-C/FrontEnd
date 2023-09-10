import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitleBlock = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const SectionTitle = ({ children, ...rest }: SectionTitleProps) => {
  return <SectionTitleBlock {...rest}>{children}</SectionTitleBlock>;
};

export default SectionTitle;
