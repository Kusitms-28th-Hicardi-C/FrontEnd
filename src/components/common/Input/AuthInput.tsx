import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string;
}

const InputStyle = styled.input`
  width: 100%;
  outline: none;
  border-radius: 10px;
  padding: 1.1rem 1.5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const AuthInput = ({ type, placeholder }: InputProps) => {
  return <InputStyle type={type} placeholder={placeholder} />;
};

export default AuthInput;
