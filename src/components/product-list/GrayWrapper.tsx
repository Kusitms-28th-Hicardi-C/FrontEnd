import styled from 'styled-components';

interface GrayWrapperProps {
  children: React.ReactNode;
}

const GrayWrapperBlock = styled.div`
  width: 100%;
  padding-top: 4rem;
  background-color: ${({ theme }) => theme.colors.gray2};
`;

const GrayWrapper = ({ children }: GrayWrapperProps) => {
  return <GrayWrapperBlock>{children}</GrayWrapperBlock>;
};

export default GrayWrapper;
