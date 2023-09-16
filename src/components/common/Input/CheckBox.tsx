import styled from 'styled-components';

interface CheckBoxProps {
  children?: React.ReactNode;
}

const CheckBoxBlock = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Check = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5px;
  outline: 1px solid ${({ theme }) => theme.colors.gray6};
  appearance: none;
  margin-right: 0.5rem;

  &:checked {
    outline: 2px solid ${({ theme }) => theme.colors.blue1};
    background-image: url('/images/icons/check.svg');
    background-size: 1.2rem;
    background-position: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-repeat: no-repeat;
    background-position: center;
  }
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: transparent;
    outline: 1px solid ${({ theme }) => theme.colors.gray6};
  }
`;

const CheckBox = ({ children }: CheckBoxProps) => {
  return (
    <CheckBoxBlock>
      <Check type="checkbox" /> {children}
    </CheckBoxBlock>
  );
};

export default CheckBox;
