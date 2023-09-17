import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { MdArrowForwardIos } from 'react-icons/md';

import hand from '../../assets/client/hand.svg';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue1};
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20rem;
  }

  @media screen and (max-width: 868px) {
    padding: 2rem 3rem;

    img {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-3rem);

  @media screen and (max-width: 868px) {
    font-size: 1.5rem;
    transform: translateX(0);
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

const InquiryButton = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  padding: 1rem 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  i {
    display: none;
    position: absolute;
    top: 50%;
    right: 20px;
    width: 16px;
    height: 16px;
    transform: translateY(-12px);
    z-index: 60;
    visibility: hidden;
  }

  @media screen and (max-width: 868px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 600px) {
    display: block;
    margin-left: 0;
    width: 300px;
  }
`;

const Inquiry = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/support');
  };

  return (
    <Container>
      <img src={hand} alt="hand" />
      <Text>
        더 스마트한 병원을 위한 솔루션,
        <br />
        Hicardi+로 시작하세요
      </Text>
      <InquiryButton onClick={handleInquiryClick}>
        <span>문의하기</span>
        <i>
          <MdArrowForwardIos />
        </i>
      </InquiryButton>
    </Container>
  );
};

export default Inquiry;
