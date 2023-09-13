import styled from 'styled-components';

interface GrayBackgroundProps {
  children: React.ReactNode;
}

const GrayBackgroundBlock = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray2};
`;

const GrayBackground = ({ children, ...rest }: GrayBackgroundProps) => {
  return <GrayBackgroundBlock {...rest}>{children}</GrayBackgroundBlock>;
};

export default GrayBackground;
