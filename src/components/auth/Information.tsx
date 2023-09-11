import styled from 'styled-components';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import ButtonBox from './ButtonBox';
import Title from '../common/Title/Title';
import Radio from '../common/Input/Radio';
import Input from '../common/Input/Input';
import DoubleCheckButton from '../common/Button/DoubleCheckButton';
import Address from '../common/Input/Address';
import SubTitle from '../common/Title/SubTitle';

const ContentBox = styled.div`
  margin-bottom: 5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1.4rem 4rem;
  border-top: 2px solid ${({ theme }) => theme.colors.gray6};
  span {
    margin: 0 0.5rem;
  }
`;

const MediumInput = styled(Input)`
  width: 15rem;
`;

const SmallInput = styled(Input)`
  width: 10rem;
`;

const Select = styled.select`
  width: 20rem;
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 8px;
  cursor: pointer;
`;

const PhoneSelect = styled(Select)`
  width: 8rem;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
  margin-left: 0.8rem;
`;

const CommonNumber = [
  '02',
  '031',
  '032',
  '033',
  '041',
  '042',
  '043',
  '044',
  '051',
  '052',
  '053',
  '054',
  '055',
  '061',
  '062',
  '063',
  '064',
];
const PhoneNumber = ['010', '011', '016', '017', '018', '019'];

const Information = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/signup/complete');
  };

  return (
    <>
      <Index index={2} />
      <Title>회원인증</Title>
      <ContentBox>
        <Content>
          <SubTitle>회원인증</SubTitle>
          <Radio checked={true} text="사업자 회원" />
        </Content>
        <Content>
          <SubTitle>사업자구분</SubTitle>
          <Radio checked={true} name="buisnessman" text="개인 사업자" />
          <Radio name="buisnessman" text="법인 사업자" />
        </Content>
      </ContentBox>

      <Title>기본정보</Title>
      <ContentBox>
        <Content>
          <SubTitle>아이디</SubTitle>
          <Input type="text" placeholder="아이디 입력" />
          <Description>영문 소문자/숫자, 4~16자</Description>
        </Content>
        <Content>
          <SubTitle>비밀번호</SubTitle>
          <Input type="password" placeholder="비밀번호 입력" />
          <Description>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자</Description>
        </Content>
        <Content>
          <SubTitle>비밀번호 확인</SubTitle>
          <Input type="password" placeholder="비밀번호 확인 입력" />
        </Content>
        <Content>
          <SubTitle>대표자 이름</SubTitle>
          <Input type="text" placeholder="이름 입력" />
        </Content>
        <Content>
          <SubTitle>상호명</SubTitle>
          <Input type="text" />
        </Content>
        <Content>
          <SubTitle>사업자 번호</SubTitle>
          <MediumInput type="text" />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
        </Content>

        <Content>
          <SubTitle>주소</SubTitle>
          <Address fullWidth />
        </Content>

        <Content>
          <SubTitle>일반전화</SubTitle>
          <PhoneSelect>
            {CommonNumber.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </PhoneSelect>
          <span>-</span> <SmallInput type="text" />
          <span>-</span> <SmallInput type="text" />
        </Content>
        <Content>
          <SubTitle>휴대전화</SubTitle>
          <PhoneSelect>
            {PhoneNumber.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </PhoneSelect>
          <span>-</span> <SmallInput type="text" />
          <span>-</span> <SmallInput type="text" />
        </Content>
        <Content>
          <SubTitle>
            이메일<span>*</span>
          </SubTitle>
          <Input type="text" /> <span>@</span>
          <Select>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="gmail.com">gmail.com</option>
            <option value="nate.com">nate.com</option>
          </Select>
        </Content>
      </ContentBox>

      <Title>추가정보</Title>
      <ContentBox>
        <Content>
          <SubTitle>대표자 성별</SubTitle>
          <Radio name="gender" text="남자" />
          <Radio name="gender" text="여자" />
        </Content>
        <Content>
          <SubTitle>대표자 생년월일</SubTitle>
          <SmallInput type="number" /> <span>년</span>
          <SmallInput type="number" /> <span>월</span>
          <SmallInput type="number" /> <span>일</span>
          <Radio name="solar" text="양력" />
          <Radio name="solar" text="음력" />
        </Content>
        <Content>
          <SubTitle>요양기관기호</SubTitle>
          <Input type="text" />
        </Content>
      </ContentBox>

      <ButtonBox handleNextClick={handleNextClick} />
    </>
  );
};

export default Information;
