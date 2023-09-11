import styled, { css } from 'styled-components';
import DoubleCheckButton from '../Button/DoubleCheckButton';
import Input from './Input';

interface AddressProps {
  fullWidth?: boolean;
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
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          flex: 1;
        `
      : css`
          width: 20rem;
        `};
  /* width: ${({ fullWidth }) => (fullWidth ? '100%' : '20rem')}; */
`;

const BigWhiteInput = styled(Input)<AddressProps>`
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          flex: 1;
        `
      : css`
          width: 20rem;
        `};
  /* width: ${({ fullWidth }) => (fullWidth ? '100%' : '20rem')}; */
`;

const Address = ({ fullWidth }: AddressProps) => {
  return (
    <AddressStyle>
      <div>
        <SmallInput type="text" placeholder="우편번호" />
        <DoubleCheckButton>중복확인</DoubleCheckButton>
      </div>
      <BigInput type="text" placeholder="기본주소" fullWidth={fullWidth} />
      <BigWhiteInput type="text" fullWidth={fullWidth} />
    </AddressStyle>
  );
};

export default Address;
