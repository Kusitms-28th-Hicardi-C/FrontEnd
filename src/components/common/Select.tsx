import styled from 'styled-components';

interface SelectProps {
  children: React.ReactNode;
}

const SelectBlock = styled.select`
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 8px;
  cursor: pointer;
`;

const Select = ({ children, ...rest }: SelectProps) => {
  return <SelectBlock {...rest}>{children}</SelectBlock>;
};

export default Select;
