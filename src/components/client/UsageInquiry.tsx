import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import { ContainerAnimation, TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

const Box = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  border-radius: 1rem;
  cursor: pointer;
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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalMain = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 30rem;
  height: 10rem;
  background-color: white;
  border-radius: 1rem;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  positoin: relative;

  img {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;

const UsageInquiry = () => {
  const { ref, animation } = useObserver();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Banner>
      <Title>이용 문의</Title>
      <Box onClick={handleModalOpen} ref={ref} animate={animation} variants={ContainerAnimation}>
        <Left>
          <Content>하이카디에 관해 </Content>
          <Content>궁금한 점이 있으신가요? </Content>
        </Left>
        <Right>
          <BigText>1:1 문의 남기기</BigText>
        </Right>
      </Box>
      <Box ref={ref} animate={animation} variants={ContainerAnimation}>
        <Left>
          <Content>상담원 연결이 필요하신가요?</Content>
        </Left>
        <Right>
          <Content>고객센터 연결</Content>
          <BigText>080-920-1001</BigText>
          <SmallText>* 상담가능시간 : 평일 09:00 ~ 17:00</SmallText>
        </Right>
      </Box>
      {modalOpen && (
        <ModalBackground onClick={handleModalOpen}>
          <ModalMain onClick={handleModalOpen} initial="hidden" animate="visible" variants={TextAnimation}>
            <img src="/images/supports/close.svg" />
            준비중입니다.
          </ModalMain>
        </ModalBackground>
      )}
    </Banner>
  );
};

export default UsageInquiry;
