import styled from 'styled-components';
import Logo from '../../assets/logo/hicardi-white-logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 3rem 15%;
  background-color: ${({ theme }) => theme.colors.gray8};
  color: ${({ theme }) => theme.colors.white};
`;

const LogoImg = styled.img`
  width: 10rem;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;
  opacity: 0.7;

  p {
    font-size: 0.9rem;
    font-weight: 400;

    span {
      font-weight: 700;
      margin-left: 0.5rem;
    }
  }
`;

const Description = () => {
  return (
    <Container>
      <LogoImg src={Logo} alt="logo" />
      <Company>
        <p>
          사업자등록번호 <span>204-86-40112</span>
        </p>
        <p>
          상호 <span>동아에스티(주)</span>
        </p>
        <p>
          대표자명 <span>김민영</span>
        </p>
        <p>
          주소 <span>서울특별시 동대문구 천호대로 64</span>
        </p>
        <p>
          통신판매업신고번호 <span>제2022-서울동대문-1374호</span>
        </p>
        <p>
          의료기기판매업번호 <span>제2003-3050034-00003호</span>
        </p>
      </Company>
      <Company>copyright 2023 회사명. All rights reserved</Company>
    </Container>
  );
};

export default Description;
