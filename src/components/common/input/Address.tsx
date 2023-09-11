import styled from 'styled-components';
import DoubleCheckButton from '../Button/DoubleCheckButton';
import Input from './Input';

const AddressStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddressInput = styled(Input)`
  background: ${({ theme }) => theme.colors.gray2};
`;

const SmallInput = styled(AddressInput)`
  width: 10rem;
`;

const BigInput = styled(AddressInput)`
  width: 20rem;
`;

const Address = () => {
  return (
    <AddressStyle>
      <div>
        <SmallInput type="text" placeholder="우편번호" />
        <DoubleCheckButton>중복확인</DoubleCheckButton>
      </div>
      <BigInput type="text" placeholder="기본주소" />
      <Input type="text" />
    </AddressStyle>
  );
};

export default Address;
