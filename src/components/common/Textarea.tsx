import styled from 'styled-components';

interface TextareaProps {
  children: React.ReactNode;
}

const TextareaStyle = styled.textarea`
  width: 100%;
  height: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  padding: 0.8rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }
`;

const Textarea = ({ children }: TextareaProps) => {
  return <TextareaStyle>{children}</TextareaStyle>;
};

export default Textarea;
