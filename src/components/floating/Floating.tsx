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
  transform: translateY(2rem);
  cursor: pointer;

  &:hover {
    transform: translateY(1.8rem);
    transition: all 0.2s ease-in-out;
  }
`;

const ScrollUp = styled.img`
  width: 5rem;
  cursor: pointer;
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
