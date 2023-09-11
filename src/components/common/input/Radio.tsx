import styled from 'styled-components';

interface RadioProps {
  checked?: boolean;
  name?: string;
  text: string;
}

const RadioStyle = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
  white-space: nowrap;
`;

const Radio = ({ checked, name, text }: RadioProps) => {
  return (
    <Label>
      <RadioStyle type="radio" checked={checked} name={name} /> {text}
    </Label>
  );
};

export default Radio;
