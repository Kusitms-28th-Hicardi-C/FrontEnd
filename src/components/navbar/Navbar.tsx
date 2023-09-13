import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaUser, FaSearch } from 'react-icons/fa';

import logo from '../../assets/logo/hicardi-logo.svg';
import NavActiveLink from '../common/NavActiveLink';

interface NavIntroSpanProps {
  active: string;
}

interface DropdownProps {
  children: React.ReactNode;
}

const NavbarBlock = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
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
`;

const NavIntroSpan = styled.span<NavIntroSpanProps>`
  font-weight: 600;
  cursor: pointer;

  ${(props) =>
    props.active === '1' &&
    css`
      color: #20c5ff;
    `}
`;

const IntroWrapper = styled.div`
  position: relative;
`;

const IconList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  height: 100%;

  img {
    width: 20px;
    height: 20px;
  }
`;

const IconItem = styled.div`
  position: relative;
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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  box-shadow: 0px 0px 10px 3px #0000001a;

  a {
    display: block;
    padding: 1rem;

    span {
      display: inline-block;
      width: 150px;
      color: ${({ theme }) => theme.colors.black};
      padding: 0.125rem 0.75rem;
    }

    &:hover {
      span {
        background-color: ${({ theme }) => theme.colors.blue4};
        color: ${({ theme }) => theme.colors.blue1};
        border-radius: 16px;
      }
    }
  }

  li + li {
    border-top: 1px solid #cccccc;
  }
`;

const Dropdown = ({ children, ...rest }: DropdownProps) => {
  return <DropdownBlock {...rest}>{children}</DropdownBlock>;
};

const InfoDropdown = styled(Dropdown)`
  top: 50px;
  right: -90px;
  transform: translateX(-23px);
`;

const UserDropdown = styled(Dropdown)`
  top: 50px;
  right: -90px;
  transform: translateX(-10px);
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = () => {
  const [isVisibleIntroMenu, setIsVisibleIntroMenu] = useState(false);
  const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);

  const onIntroSpanClick = () => {
    setIsVisibleIntroMenu(!isVisibleIntroMenu);
  };

  const onIntroMenuClick = () => {
    setIsVisibleIntroMenu(!isVisibleIntroMenu);
  };

  const onUserIconClick = () => {
    setIsVisibleUserMenu(!isVisibleUserMenu);
  };

  const onUserMenuClick = () => {
    setIsVisibleUserMenu(false);
  };

  return (
    <>
      <NavbarBlock>
        <ContentsWrapper>
          <Logo to="/">
            <img src={logo} alt="hicardi-logo" />
          </Logo>
          <LinkList>
            <NavIntroSpan onClick={onIntroSpanClick} active={isVisibleIntroMenu ? '1' : '0'}>
              <IntroWrapper>
                하이카디
                {isVisibleIntroMenu && (
                  <InfoDropdown>
                    <Link to="#" onClick={onIntroMenuClick}>
                      <span>브랜드 소개</span>
                    </Link>
                    <Link to="#" onClick={onIntroMenuClick}>
                      <span>심전도 모니터링</span>
                    </Link>
                    <Link to="#" onClick={onIntroMenuClick}>
                      <span>홀터 솔루션</span>
                    </Link>
                    <Link to="/news" onClick={onIntroMenuClick}>
                      <span>뉴스</span>
                    </Link>
                  </InfoDropdown>
                )}
              </IntroWrapper>
            </NavIntroSpan>
            <NavActiveLink to="/products">구매하기</NavActiveLink>
            <NavActiveLink to="/reviews">사용사례</NavActiveLink>
            <NavActiveLink to="/blog">블로그</NavActiveLink>
            <NavActiveLink to="/support">고객지원</NavActiveLink>
          </LinkList>
          <IconList>
            <IconItem>
              <i className={isVisibleUserMenu ? 'active' : ''} onClick={onUserIconClick}>
                <FaUser />
              </i>
              {isVisibleUserMenu && (
                <UserDropdown>
                  <Link to="/login" onClick={onUserMenuClick}>
                    <span>로그인 / 회원가입</span>
                  </Link>
                  <Link to="/cart" onClick={onUserMenuClick}>
                    <span>장바구니</span>
                  </Link>
                  <Link to="#" onClick={onUserMenuClick}>
                    <span>회원정보 수정</span>
                  </Link>
                </UserDropdown>
              )}
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
