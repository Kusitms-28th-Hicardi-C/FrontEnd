import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { MdArrowForwardIos } from 'react-icons/md';

const InquiryBlock = styled.div`
  background: ${({ theme }) => theme.colors.blue1};
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1020px) {
    width: 70%;
    padding: 1rem 0;
  }

  @media screen and (max-width: 992px) {
    width: 700px;
    padding: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterImage = styled.div`
  width: 150px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1020px) {
    display: none;
  }

  @media screen and (max-width: 868px) {
    display: none;
  }
`;

const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-3rem);

  @media screen and (max-width: 1020px) {
    transform: translateX(0);
  }

  @media screen and (max-width: 1150px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 1087px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 620px) {
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

  @media screen and (max-width: 620px) {
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
    <InquiryBlock>
      <Container>
        <FooterImage>
          <img src="/images/main/footer-image.png" alt="hand" />
        </FooterImage>
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
    </InquiryBlock>
  );
};

export default Inquiry;
