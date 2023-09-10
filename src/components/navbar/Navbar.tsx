import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaUser, FaSearch } from 'react-icons/fa';

import logo from '../../assets/logo/hicardi-logo.svg';
import NavActiveLink from '../common/NavActiveLink';

const NavbarBlock = styled.nav`
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
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

  div {
    position: relative;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const IconItem = styled.div`
  cursor: pointer;

  i {
    font-size: 1.25rem;

    &.active {
      color: ${({ theme }) => theme.colors.blue2};
    }
  }
`;

const DropdownBlock = styled.ul`
  position: absolute;
  top: 40px;
  left: -70px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 10px 3px #0000001a;

  li {
    padding: 1rem;
  }

  li + li {
    border-top: 1px solid #cccccc;
  }
`;

const Dropdown = () => {
  return (
    <DropdownBlock>
      <li>
        <Link to="/login">로그인 / 회원가입</Link>
      </li>
      <li>장바구니</li>
      <li>회원정보 수정</li>
    </DropdownBlock>
  );
};

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = () => {
  const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);

  const onUserClick = () => {
    setIsVisibleUserMenu(!isVisibleUserMenu);
  };

  return (
    <>
      <NavbarBlock>
        <ContentsWrapper>
          <Logo to="/">
            <img src={logo} alt="hicardi-logo" />
          </Logo>
          <LinkList>
            <NavActiveLink to="/introduce">하이카디</NavActiveLink>
            <NavActiveLink to="/products">구매하기</NavActiveLink>
            <NavActiveLink to="/case">사용사례</NavActiveLink>
            <NavActiveLink to="/blog">블로그</NavActiveLink>
            <NavActiveLink to="/support">고객지원</NavActiveLink>
          </LinkList>
          <IconList>
            <IconItem>
              <i className={isVisibleUserMenu ? 'active' : ''} onClick={onUserClick}>
                <FaUser />
              </i>
              {isVisibleUserMenu && <Dropdown />}
            </IconItem>
            <IconItem>
              <i>
                <FaSearch />
              </i>
            </IconItem>
          </IconList>
        </ContentsWrapper>
      </NavbarBlock>
      <Spacer />
    </>
  );
};

export default Navbar;
