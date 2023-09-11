import styled from 'styled-components';

interface DoubleCheckButtonProps {
  children: React.ReactNode;
}

const DoubleCheckButtonStyle = styled.button`
  padding: 0.8rem 1rem;
  background: ${({ theme }) => theme.colors.gray2};
  margin-left: 1rem;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
`;

const DoubleCheckButton = ({ children }: DoubleCheckButtonProps) => {
  return <DoubleCheckButtonStyle>{children}</DoubleCheckButtonStyle>;
};

export default DoubleCheckButton;
