import styled from 'styled-components';

const UsageInquiry = () => {
  return (
    <Banner>
      <Title>이용 문의</Title>
      <Box>
        <Left>
          <Content>하이카디에 관해 </Content>
          <Content>궁금한 점이 있으신가요? </Content>
        </Left>
        <Right>
          <BigText>1:1 문의 남기기</BigText>
        </Right>
      </Box>
      <Box>
        <Left>
          <Content>상담원 연결이 필요하신가요?</Content>
        </Left>
        <Right>
          <Content>고객센터 연결</Content>
          <BigText>080-920-1001</BigText>
          <SmallText>* 상담가능시간 : 평일 09:00 ~ 17:00</SmallText>
        </Right>
      </Box>
    </Banner>
  );
};

export default UsageInquiry;

const Banner = styled.div`
  background: linear-gradient(to bottom, #01a4ff, #00c2ff);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 15%;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 800;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  border-radius: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Right = styled(Left)`
  gap: 0.4rem;
`;

const Content = styled.div`
  font-size: 1.5rem;
`;

const BigText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const SmallText = styled.div`
  font-size: 1rem;
  text-align: right;
  font-weight: 300;
`;
