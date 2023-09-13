import styled from 'styled-components';
import hand from '../../assets/client/hand.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue1};
  width: 100%;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20rem;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-3rem);
`;

const InquiryButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  padding: 1rem 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  white-space: nowrap;

  img {
    margin-left: 1rem;
    width: 1rem;
    height: 1rem;
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
      <Text>더 스마트한 병원을 위한 솔루션, Hicardi+로 시작하세요</Text>
      <InquiryButton onClick={handleInquiryClick}>
        문의하기
        <img src={rightArrow} alt="rightArrow" />
      </InquiryButton>
    </Container>
  );
};

export default Inquiry;
