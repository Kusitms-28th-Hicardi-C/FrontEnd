import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder?: string;
}

const InputStyle = styled.input`
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return <InputStyle type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
