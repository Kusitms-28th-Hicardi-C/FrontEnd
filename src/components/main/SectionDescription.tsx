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
`;

const SectionDescription = ({ children }: SectionDescriptionProps) => {
  return <SectionDescriptionBlock>{children}</SectionDescriptionBlock>;
};

export default SectionDescription;
