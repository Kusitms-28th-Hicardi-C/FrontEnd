import styled from 'styled-components';

interface SectionDescriptionProps {
  children: React.ReactNode;
}

const SectionDescriptionBlock = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;

  b {
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const SectionDescription = ({ children, ...rest }: SectionDescriptionProps) => {
  return <SectionDescriptionBlock {...rest}>{children}</SectionDescriptionBlock>;
};

export default SectionDescription;
