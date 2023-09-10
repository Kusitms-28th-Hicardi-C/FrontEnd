import styled from 'styled-components';
import Index from './Index';
import CheckBox from '../common/CheckBox';
import Textarea from '../common/Textarea';
import { useNavigate } from 'react-router-dom';

const Subtitle = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  padding: 1rem 4rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
`;

const GrayButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray2};
`;

const BlueButton = styled(Button)`
  background: ${({ theme }) => theme.colors.blue4};
`;

const Agreement = () => {
  const navigate = useNavigate();

  const handleCancleClick = () => {
    navigate(-1);
  };
  const handleNextClick = () => {
    navigate('/signup/information');
  };

  return (
    <>
      <Index index={1} />
      <Subtitle>전체 동의</Subtitle>

      <Text>
        <CheckBox />
        이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.
      </Text>
      <Textarea>이용약관</Textarea>
      <Text>
        <CheckBox />
        이용약관 동의 (필수)
      </Text>
      <Textarea>이용약관</Textarea>
      <Text>
        <CheckBox />
        개인정보처리방침 동의 (필수)
      </Text>
      <Textarea>이용약관</Textarea>
      <Text>
        <CheckBox />
        쇼핑정보 수신 동의 (선택)
      </Text>
      <Text>
        <CheckBox />
        이메일 수신 동의 (선택)
      </Text>
      <Textarea>이용약관</Textarea>

      <ButtonBox>
        <GrayButton onClick={handleCancleClick}>취소</GrayButton>
        <BlueButton onClick={handleNextClick}>다음</BlueButton>
      </ButtonBox>
    </>
  );
};

export default Agreement;
