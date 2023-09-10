import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonBoxProps {
  handleNextClick: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  padding: 1rem 4rem;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 10px;
  border: none;
`;

const GrayButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray2};
`;

const BlueButton = styled(Button)`
  background: ${({ theme }) => theme.colors.blue4};
`;

const ButtonBox = ({ handleNextClick }: ButtonBoxProps) => {
  const navigate = useNavigate();

  const handleCancleClick = () => {
    navigate(-1);
  };

  return (
    <ButtonContainer>
      <GrayButton onClick={handleCancleClick}>취소</GrayButton>
      <BlueButton onClick={handleNextClick}>다음</BlueButton>
    </ButtonContainer>
  );
};

export default ButtonBox;
