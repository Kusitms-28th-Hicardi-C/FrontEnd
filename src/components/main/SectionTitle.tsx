import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitleBlock = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const SectionTitle = ({ children, ...rest }: SectionTitleProps) => {
  return <SectionTitleBlock {...rest}>{children}</SectionTitleBlock>;
};

export default SectionTitle;
