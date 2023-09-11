import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import Index from './Index';

const Radio = styled.input``;

const PurchaseInformation = () => {
  return (
    <>
      <Header>구매정보 입력</Header>
      <Index index={1} />
      <Title>배송지</Title>
      <Radio type="radio" name="address" value="default" />
      <Title>주문상품</Title>
    </>
  );
};

export default PurchaseInformation;
