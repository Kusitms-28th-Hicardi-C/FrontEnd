import { useNavigate } from 'react-router';
import styled from 'styled-components';

const FloatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1000;
`;

const Inquiry = styled.img`
  width: 10rem;
  transform: translateY(2.5rem);
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 8rem;
    transform: translateY(2rem);
  }

  @media screen and (max-width: 850px) {
    transform: translateY(2rem);
    width: 6rem;
  }
`;

const ScrollUp = styled.img`
  width: 5rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 4rem;
  }

  @media screen and (max-width: 850px) {
    width: 3rem;
  }
`;

const Floating = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/support');
  };
  const handleScrollupClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FloatingBox>
      <Inquiry onClick={handleInquiryClick} src="/images/floating/inquiry.svg" alt="문의하기" />
      <ScrollUp onClick={handleScrollupClick} src="/images/floating/scrollup.svg" alt="스크롤업" />
    </FloatingBox>
  );
};

export default Floating;
