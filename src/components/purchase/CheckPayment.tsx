import styled from 'styled-components';
import Header from '../common/Title/Header';
import Title from '../common/Title/Title';
import Index from './Index';
import Box from '../common/Box';
import Select from '../common/Select';
import CheckBox from '../common/Input/CheckBox';
import { useNavigate, useParams } from 'react-router-dom';
import { emailState, nameState } from '../../states/user';
import { useRecoilValue } from 'recoil';
import { productPriceState } from '../../states/product';

const CheckContent = styled.div`
  font-size: 1.2rem;
  span {
    font-size: 1.3rem;
    display: inline-block;
    width: 10rem;
    text-align: right;
    font-weight: 800;
    margin-right: 2rem;
  }
`;

const CheckContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 3rem;
`;

const ContentBox = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.gray1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

const OrderAmount = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
`;

const WhiteDescription = styled(Description)`
  color: ${({ theme }) => theme.colors.white};
`;

const BoxBlock = styled.div`
  margin: 3rem 0;
`;

const SelectBox = styled(Select)`
  width: 100%;
`;

const SmallBox = styled(Box)`
  padding: 0.8rem 2rem;
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 0.9rem;
  margin: 2rem 0 4rem 0;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const Button = styled.button`
  padding: 1rem 4rem;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
`;

const CheckPayment = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const handlePurchaseClick = () => {
    navigate(`/products/${productId}/purchase/payment`);
  };

  const name = useRecoilValue(nameState);
  const email = useRecoilValue(emailState);
  const productPrice = useRecoilValue(productPriceState);

  return (
    <>
      <Header>결제정보 확인</Header>
      <Index index={2} />
      <Title>입력 정보 확인</Title>
      <Box background="#F8F9FB">
        <CheckContentBox>
          <CheckContent>
            <span>받는 사람</span>
            {name}
          </CheckContent>
          <CheckContent>
            <span>주소</span>
            서울특별시 동대문구 이문로 107
          </CheckContent>
          <CheckContent>
            <span>전화번호</span>010-1234-5678
          </CheckContent>
          <CheckContent>
            <span>이메일</span>
            {email}@gmail.com
          </CheckContent>
        </CheckContentBox>
      </Box>
      <ContentBox>
        <Title>결제 정보</Title>
        <Box background="#F8F9FB">
          <Description>주문상품</Description>
          <OrderAmount>{productPrice} 원</OrderAmount>
        </Box>
        <Box background="#F2F4F6">
          <Description>배송비</Description>
          <OrderAmount>+ 0 원</OrderAmount>
        </Box>
        <Box background="#D3EFFF">
          <Description>할인/부가결제</Description>
          <OrderAmount>- 0 원</OrderAmount>
        </Box>
        <BoxBlock>
          <Box background="#666666">
            <WhiteDescription>결제총액</WhiteDescription>
            <WhiteDescription>{productPrice} 원</WhiteDescription>
          </Box>
        </BoxBlock>
      </ContentBox>
      <Title>결제수단</Title>
      <SelectBox>
        <option value="결제수단 선택">결제수단 선택</option>
        <option value="신용카드">신용카드</option>
        <option value="계좌이체">계좌이체</option>
        <option value="휴대폰">휴대폰</option>
        <option value="무통장입금">무통장입금</option>
      </SelectBox>
      <SmallBox background="#F2F2F2">* 소액결제의 경우, PG사별 금액 제한이 있을 수 있습니다.</SmallBox>

      <CheckBox>구매 조건을 모두 확인했으며, 결제 진행에 동의합니다.</CheckBox>

      <ButtonBox>
        <Button onClick={handlePurchaseClick}>{productPrice}원 결제하기</Button>
      </ButtonBox>
    </>
  );
};

export default CheckPayment;
