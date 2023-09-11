import styled from 'styled-components';
import DoubleCheckButton from '../Button/DoubleCheckButton';
import Input from './Input';

interface AddressProps {
  width?: boolean;
}

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

const BigInput = styled(AddressInput)<AddressProps>`
  width: ${({ width }) => (width ? '100%' : '20rem')};
`;

const BigWhiteInput = styled(Input)<AddressProps>`
  width: ${({ width }) => (width ? '100%' : '20rem')};
`;

const Address = ({ width }: AddressProps) => {
  return (
    <AddressStyle>
      <div>
        <SmallInput type="text" placeholder="우편번호" />
        <DoubleCheckButton>중복확인</DoubleCheckButton>
      </div>
      <BigInput type="text" placeholder="기본주소" width={width} />
      <BigWhiteInput type="text" width={width} />
    </AddressStyle>
  );
};

export default Address;
