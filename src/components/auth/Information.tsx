import styled from 'styled-components';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import ButtonBox from './ButtonBox';
import Title from '../common/Title/Title';
import Radio from '../common/Input/Radio';
import DoubleCheckButton from '../common/Button/DoubleCheckButton';
import Address from '../common/Input/Address';
import SubTitle from '../common/Title/SubTitle';
import Select from '../common/Select';
import { useState } from 'react';
import { useUserSignup } from '../../hooks/auth/useSignup';
import { useRecoilState } from 'recoil';
import { emailState, idState, nameState } from '../../states/user';

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

const SelectBox = styled(Select)`
  width: 20rem;
`;

const PhoneSelect = styled(Select)`
  width: 8rem;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
  margin-left: 0.8rem;
`;

const Input = styled.input`
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const MediumInput = styled(Input)`
  width: 15rem;
`;

const SmallInput = styled(Input)`
  width: 10rem;
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

  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useState('1234');
  const [name, setName] = useRecoilState(nameState);
  const [companyName, setCompanyName] = useState('사업자');
  const [companyNumber, setCompanyNumber] = useState(1);
  const [address, setAddress] = useState('1234');
  const [phone, setPhone] = useState('010');
  const [cellPhone, setCellPhone] = useState('010');
  const [email, setEmail] = useRecoilState(emailState);

  const signup = {
    membershipVerification: 'BUSINESSMEMEBER',
    businessClassification: 'PERSONAL',
    loginId: id,
    password: password,
    name: name,
    businessName: companyName,
    businessNumber: companyNumber,
    address: address,
    landline: phone,
    phoneNumber: cellPhone,
    email: email,
    gender: 'F',
    birthDate: '1234',
    YKIHO: '123456789',
  };

  const signupMutation = useUserSignup(signup);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'companyName') {
      setCompanyName(value);
    } else if (name === 'companyNumber') {
      setCompanyNumber(parseInt(value, 10));
    } else if (name === 'address') {
      setAddress(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'cellPhone') {
      setCellPhone(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleNextClick = () => {
    navigate('/signup/complete');
    signupMutation.mutate();
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
          <Input type="text" name="id" placeholder="아이디 입력" onChange={handleInputChange} />
          <Description>영문 소문자/숫자, 4~16자</Description>
        </Content>
        <Content>
          <SubTitle>비밀번호</SubTitle>
          <Input type="password" name="password" placeholder="비밀번호 입력" onChange={handleInputChange} />
          <Description>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자</Description>
        </Content>
        <Content>
          <SubTitle>비밀번호 확인</SubTitle>
          <Input type="password" placeholder="비밀번호 확인 입력" />
        </Content>
        <Content>
          <SubTitle>대표자 이름</SubTitle>
          <Input type="text" name="name" placeholder="이름 입력" onChange={handleInputChange} />
        </Content>
        <Content>
          <SubTitle>상호명</SubTitle>
          <Input type="text" name="companyName" onChange={handleInputChange} />
        </Content>
        <Content>
          <SubTitle>사업자 번호</SubTitle>
          <MediumInput type="number" name="companyNumber" onChange={handleInputChange} />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
        </Content>

        <Content>
          <SubTitle>주소</SubTitle>
          <Address />
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
          <span>-</span> <SmallInput type="number" />
          <span>-</span> <SmallInput type="number" />
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
          <span>-</span> <SmallInput type="number" />
          <span>-</span> <SmallInput type="number" />
        </Content>
        <Content>
          <SubTitle>이메일</SubTitle>
          <Input type="text" name="email" onChange={handleInputChange} /> <span>@</span>
          <SelectBox>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="gmail.com">gmail.com</option>
            <option value="nate.com">nate.com</option>
          </SelectBox>
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
