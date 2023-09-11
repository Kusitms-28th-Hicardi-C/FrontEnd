import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import Index from './Index';
import Radio from '../common/Radio';

const DeliveryAddressBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const PurchaseInformation = () => {
  return (
    <>
      <Header>구매정보 입력</Header>
      <Index index={1} />

      <Title>배송지</Title>
      <DeliveryAddressBox>
        <Radio checked={true} name="DeliveryAddress" text="회원 정보와 동일" />
        <Radio name="DeliveryAddress" text="새로운 배송지" />
      </DeliveryAddressBox>
      <Title>주문상품</Title>
    </>
  );
};

export default PurchaseInformation;
