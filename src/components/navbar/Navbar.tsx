import styled, { css } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FaUser, FaSearch } from 'react-icons/fa';

import logo from '../../assets/logo/hicardi-logo.svg';
import NavActiveLink from '../common/NavActiveLink';

interface DropdownProps {
  children: React.ReactNode;
  mobile?: boolean;
}

interface NavInfoSpanProps {
  active?: string;
}

const NavbarBlock = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentsWrapper = styled.div`
  width: 70%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const MobileMenuItem = styled.div`
  display: none;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 64px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  height: 1rem;
  cursor: pointer;
  z-index: 999;

  img {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 64px;
  }
`;

const Dropdown = ({ children, mobile, ...rest }: DropdownProps) => {
  const isMobile = Boolean(mobile);

  return (
    <>
      {!isMobile && <FullScreen></FullScreen>}
      <DropdownBlock {...rest}>{children}</DropdownBlock>
    </>
  );
};

const MobileDropdown = styled(Dropdown)`
  top: 105%;
  left: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.blue2};
    transition: 0.15s;
  }
`;

const MobileInfoDropdown = styled(Dropdown)`
  top: 105%;
  left: 190px;
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
  margin-left: 3rem;

  @media screen and (max-width: 992px) {
    justify-content: center;
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavInfoItem = styled.div`
  font-weight: 600;
  cursor: pointer;
  position: relative;
`;

const NavInfoSpan = styled.span<NavInfoSpanProps>`
  ${(props) => {
    if (props.active === 'true') {
      return css`
        color: ${({ theme }) => theme.colors.blue2};
      `;
    }
  }}
  &:hover {
    color: ${({ theme }) => theme.colors.blue2};
    transition: 0.15s;
  }
`;

const IconList = styled.div`
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

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

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const DropdownBlock = styled.ul`
  position: absolute;
  z-index: 150;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  box-shadow: 0px 0px 10px 3px #0000001a;
  padding: 0.3rem 0;

  a {
    display: block;
    padding: 0.5rem 1rem;

    span {
      display: inline-block;
      width: 150px;
      color: ${({ theme }) => theme.colors.black};
      padding: 0.3rem 0.5rem;
      text-align: center;
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

const InfoDropdown = styled(Dropdown)`
  top: 50px;
  right: -67px;

  @media screen and (max-width: 768px) {
    right: -60px;
  }
`;

const UserDropdown = styled(Dropdown)`
  top: 50px;
  right: -80px;

  @media screen and (max-width: 768px) {
    right: -60px;
  }
`;

const SearchDropdown = styled(Dropdown)`
  top: 50px;
  right: -30px;
  padding: 0.5rem;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    right: -10px;
  }
`;

const SearchInput = styled.div`
  position: relative;

  input {
    padding: 0.5rem 0;
    padding-left: 0.75rem;
    padding-right: 12%;
    border-radius: 8px;
    border: 2.5px solid ${({ theme }) => theme.colors.blue1};
    width: 250px;
  }

  a {
    padding: 0;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.blue1};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.blue1};
  }

  i {
    color: ${({ theme }) => theme.colors.blue1};
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = () => {
  const [isVisibleInfoMenu, setIsVisibleInfoMenu] = useState(false);
  const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);
  const [isVisibleSearchMenu, setIsVisibleSearchMenu] = useState(false);
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);
  const [isVisibleMobileInfoMenu, setIsVisibleMobileInfoMenu] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const location = useLocation();
  const [navInfoIsActive, setNavInfoIsActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.indexOf('/brand') === 0) {
      setNavInfoIsActive(true);
    } else if (location.pathname.indexOf('/monitoring') === 0) {
      setNavInfoIsActive(true);
    } else if (location.pathname.indexOf('/halter') === 0) {
      setNavInfoIsActive(true);
    } else if (location.pathname.indexOf('/news') === 0) {
      setNavInfoIsActive(true);
    } else {
      setNavInfoIsActive(false);
    }
  }, [location]);

  return (
    <>
      <NavbarBlock>
        <ContentsWrapper>
          <MobileMenuItem>
            <MobileMenuIcon
              onClick={() => {
                setIsVisibleMobileMenu(!isVisibleMobileMenu);
                setIsVisibleMobileInfoMenu(false);
              }}
            >
              <img src="/images/icons/hamburger.svg" alt="햄버거 아이콘" />
            </MobileMenuIcon>
            {isVisibleMobileMenu && (
              <MobileDropdown mobile={true}>
                <Link to="#" onClick={() => setIsVisibleMobileInfoMenu(!isVisibleMobileInfoMenu)}>
                  <span>하이카디</span>
                </Link>
                <Link to="/products" onClick={() => setIsVisibleMobileMenu(!isVisibleMobileMenu)}>
                  <span>구매하기</span>
                </Link>
                <Link to="/reviews" onClick={() => setIsVisibleMobileMenu(!isVisibleMobileMenu)}>
                  <span>사용사례</span>
                </Link>
                <Link to="/blog" onClick={() => setIsVisibleMobileMenu(!isVisibleMobileMenu)}>
                  <span>블로그</span>
                </Link>
                <Link to="/support" onClick={() => setIsVisibleMobileMenu(!isVisibleMobileMenu)}>
                  <span>고객지원</span>
                </Link>
              </MobileDropdown>
            )}
            {isVisibleMobileInfoMenu && (
              <MobileInfoDropdown mobile={true}>
                <Link
                  to="/brand"
                  onClick={() => {
                    setIsVisibleMobileMenu(false);
                    setIsVisibleMobileInfoMenu(false);
                  }}
                >
                  <span>브랜드 소개</span>
                </Link>
                <Link
                  to="/monitoring"
                  onClick={() => {
                    setIsVisibleMobileMenu(false);
                    setIsVisibleMobileInfoMenu(false);
                  }}
                >
                  <span>심전도 모니터링</span>
                </Link>
                <Link
                  to="/halter"
                  onClick={() => {
                    setIsVisibleMobileMenu(false);
                    setIsVisibleMobileInfoMenu(false);
                  }}
                >
                  <span>홀터 솔루션</span>
                </Link>
                <Link
                  to="/news"
                  onClick={() => {
                    setIsVisibleMobileMenu(false);
                    setIsVisibleMobileInfoMenu(false);
                  }}
                >
                  <span>뉴스</span>
                </Link>
              </MobileInfoDropdown>
            )}
            {isVisibleMobileMenu && (
              <FullScreen
                onClick={() => {
                  setIsVisibleMobileMenu(false);
                  setIsVisibleMobileInfoMenu(false);
                }}
              ></FullScreen>
            )}
          </MobileMenuItem>
          <Logo to="/">
            <img src={logo} alt="hicardi-logo" />
          </Logo>
          <LinkList>
            <NavInfoItem onClick={() => setIsVisibleInfoMenu(!isVisibleInfoMenu)}>
              <NavInfoSpan active={navInfoIsActive ? 'true' : 'false'}>하이카디</NavInfoSpan>
              {isVisibleInfoMenu && (
                <InfoDropdown>
                  <Link to="/brand">
                    <span>브랜드 소개</span>
                  </Link>
                  <Link to="/monitoring">
                    <span>심전도 모니터링</span>
                  </Link>
                  <Link to="/halter">
                    <span>홀터 솔루션</span>
                  </Link>
                  <Link to="/news">
                    <span>뉴스</span>
                  </Link>
                </InfoDropdown>
              )}
            </NavInfoItem>
            <NavActiveLink to="/products">구매하기</NavActiveLink>
            <NavActiveLink to="/reviews">사용사례</NavActiveLink>
            <NavActiveLink to="/blog">블로그</NavActiveLink>
            <NavActiveLink to="/support">고객지원</NavActiveLink>
          </LinkList>
          <IconList>
            <IconItem onClick={() => setIsVisibleUserMenu(!isVisibleUserMenu)}>
              <i>
                <FaUser />
              </i>
              {isVisibleUserMenu && (
                <UserDropdown>
                  <Link to="/login">
                    <span>로그인 / 회원가입</span>
                  </Link>
                  <Link to="/cart">
                    <span>장바구니</span>
                  </Link>
                  <Link to="#">
                    <span>회원정보 수정</span>
                  </Link>
                </UserDropdown>
              )}
            </IconItem>
            <IconItem>
              <i onClick={() => setIsVisibleSearchMenu(!isVisibleSearchMenu)}>
                <FaSearch />
              </i>
              {isVisibleSearchMenu && (
                <SearchDropdown>
                  <SearchInput>
                    <input
                      type="text"
                      placeholder="키워드를 입력하세요"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.keyCode === 229) return;
                        if (e.key === 'Enter') {
                          navigate(`/search?query=${searchInput}&range=all`);
                          setSearchInput('');
                          setIsVisibleSearchMenu(!isVisibleSearchMenu);
                        }
                      }}
                    />
                    <Link
                      to={`/search?query=${searchInput}&range=all`}
                      onClick={() => {
                        setSearchInput('');
                        setIsVisibleSearchMenu(!isVisibleSearchMenu);
                      }}
                    >
                      <FaSearch />
                    </Link>
                  </SearchInput>
                </SearchDropdown>
              )}
              {isVisibleSearchMenu && (
                <FullScreen onClick={() => setIsVisibleSearchMenu(!isVisibleSearchMenu)}></FullScreen>
              )}
            </IconItem>
          </IconList>
        </ContentsWrapper>
      </NavbarBlock>
      <Spacer />
    </>
  );
};

export default Navbar;
