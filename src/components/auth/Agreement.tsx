import styled from 'styled-components';
import Index from './Index';
import CheckBox from '../common/CheckBox';
import Textarea from '../common/Textarea';
import ButtonBox from './ButtonBox';
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

const Agreement = () => {
  const navigate = useNavigate();

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
      <ButtonBox handleNextClick={handleNextClick} />
    </>
  );
};

export default Agreement;
