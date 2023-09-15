import styled from 'styled-components';

interface WhiteBoxProps {
  children: React.ReactNode;
}

const SectionBlock = styled.div`
  padding: 2rem;
`;

const WhiteBoxBlock = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WhiteBox = ({ children }: WhiteBoxProps) => {
  return (
    <SectionBlock>
      <WhiteBoxBlock>{children}</WhiteBoxBlock>
    </SectionBlock>
  );
};

export default WhiteBox;
