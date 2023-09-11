import styled from 'styled-components';
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import ButtonBox from './ButtonBox';
import Title from '../common/Title';

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

const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  width: 12rem;

  span {
    color: ${({ theme }) => theme.colors.blue2};
    margin-left: 0.4rem;
  }
`;

const Sort = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
  white-space: nowrap;
`;

const Radio = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const Input = styled.input`
  width: 20rem;
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
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

const AddressInput = styled(Input)`
  background: ${({ theme }) => theme.colors.gray7};
`;

const ZipCodeInput = styled(AddressInput)`
  width: 15rem;
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

const DoubleCheckButton = styled.button`
  padding: 0.8rem 1rem;
  background: ${({ theme }) => theme.colors.gray2};
  margin-left: 1rem;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
  margin-left: 0.8rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
          <SubTitle>
            회원인증<span>*</span>
          </SubTitle>
          <Sort>
            <Radio type="radio" checked={true} /> 사업자 회원
          </Sort>
        </Content>
        <Content>
          <SubTitle>
            사업자구분<span>*</span>
          </SubTitle>
          <Sort>
            <Radio type="radio" checked={true} name="buisnessman" />
            개인 사업자
          </Sort>
          <Sort>
            <Radio type="radio" name="buisnessman" /> 법인 사업자
          </Sort>
        </Content>
      </ContentBox>

      <Title>기본정보</Title>
      <ContentBox>
        <Content>
          <SubTitle>
            아이디<span>*</span>
          </SubTitle>
          <Input type="text" placeholder="아이디 입력" />
          <Description>영문 소문자/숫자, 4~16자</Description>
        </Content>
        <Content>
          <SubTitle>
            비밀번호<span>*</span>
          </SubTitle>
          <Input type="password" placeholder="비밀번호 입력" />
          <Description>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자</Description>
        </Content>
        <Content>
          <SubTitle>
            비밀번호 확인<span>*</span>
          </SubTitle>
          <Input type="password" placeholder="비밀번호 확인 입력" />
        </Content>
        <Content>
          <SubTitle>
            대표자 이름<span>*</span>
          </SubTitle>
          <Input type="text" placeholder="이름 입력" />
        </Content>
        <Content>
          <SubTitle>
            상호명<span>*</span>
          </SubTitle>
          <Input type="text" />
        </Content>
        <Content>
          <SubTitle>
            사업자 번호<span>*</span>
          </SubTitle>
          <MediumInput type="text" />
          <DoubleCheckButton type="button">중복확인</DoubleCheckButton>
        </Content>
        <Content>
          <SubTitle>
            주소<span>*</span>
          </SubTitle>
          <Address>
            <div>
              <ZipCodeInput type="text" placeholder="우편번호" />
              <DoubleCheckButton type="button">중복확인</DoubleCheckButton>
            </div>
            <AddressInput type="text" placeholder="기본주소" />
            <Input type="text" />
          </Address>
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
          <SubTitle>
            대표자 성별<span>*</span>
          </SubTitle>
          <Sort>
            <Radio type="radio" name="gender" /> 남자
          </Sort>
          <Sort>
            <Radio type="radio" name="gender" /> 여자
          </Sort>
        </Content>
        <Content>
          <SubTitle>
            대표자 생년월일<span>*</span>
          </SubTitle>
          <SmallInput /> <span>년</span>
          <SmallInput /> <span>월</span>
          <SmallInput /> <span>일</span>
          <Sort>
            <Radio type="radio" name="solar" /> 양력
          </Sort>
          <Sort>
            <Radio type="radio" name="solar" /> 음력
          </Sort>
        </Content>
        <Content>
          <SubTitle>
            요양기관기호<span>*</span>
          </SubTitle>
          <Input type="text" />
        </Content>
      </ContentBox>

      <ButtonBox handleNextClick={handleNextClick} />
    </>
  );
};

export default Information;
