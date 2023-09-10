import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/hicardi-logo.svg';
import userIcon from '../../assets/icons/user.svg';
import searchIcon from '../../assets/icons/search.svg';

const NavbarBlock = styled.nav`
  width: 100%;
  position: fixed;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 70%;
  height: 4rem;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  img {
    height: 2rem;
  }
`;

const LinkList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  width: 100%;

  a {
    font-weight: 600;
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = () => {
  return (
    <>
      <NavbarBlock>
        <ContentsWrapper>
          <Logo to="/">
            <img src={logo} alt="hicardi-logo" />
          </Logo>
          <LinkList>
            <Link to="/introduce">하이카디</Link>
            <Link to="/products">구매하기</Link>
            <Link to="/case">사용사례</Link>
            <Link to="/blog">블로그</Link>
            <Link to="support">고객지원</Link>
          </LinkList>
          <IconList>
            <Link to="/user">
              <img src={userIcon} alt="user-icon" />
            </Link>
            <Link to="/search">
              <img src={searchIcon} alt="search-icon" />
            </Link>
          </IconList>
        </ContentsWrapper>
      </NavbarBlock>
      <Spacer />
    </>
  );
};

export default Navbar;
