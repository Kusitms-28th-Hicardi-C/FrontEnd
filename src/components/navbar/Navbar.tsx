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

const NavInfoSpan = styled.span<NavIntroSpanProps>`
  font-weight: 600;
  cursor: pointer;

  ${(props) =>
    props.active === '1' &&
    css`
      color: #20c5ff;
    `}
`;

const InfoWrapper = styled.div`
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

const SearchDropdown = styled(Dropdown)`
  top: 50px;
  right: -30px;
  padding: 0.5rem;
  border-radius: 4px;
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
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Navbar = () => {
  const [isVisibleInfoMenu, setIsVisibleInfoMenu] = useState(false);
  const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);
  const [isVisibleSearchMenu, setIsVisibleSearchMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <NavbarBlock>
        <ContentsWrapper>
          <Logo to="/">
            <img src={logo} alt="hicardi-logo" />
          </Logo>
          <LinkList>
            <NavInfoSpan
              onClick={() => {
                setIsVisibleInfoMenu(!isVisibleInfoMenu);
              }}
              active={isVisibleInfoMenu ? '1' : '0'}
            >
              <InfoWrapper>
                하이카디
                {isVisibleInfoMenu && (
                  <InfoDropdown>
                    <Link
                      to="#"
                      onClick={() => {
                        setIsVisibleInfoMenu(!isVisibleInfoMenu);
                      }}
                    >
                      <span>브랜드 소개</span>
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        setIsVisibleInfoMenu(!isVisibleInfoMenu);
                      }}
                    >
                      <span>심전도 모니터링</span>
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        setIsVisibleInfoMenu(!isVisibleInfoMenu);
                      }}
                    >
                      <span>홀터 솔루션</span>
                    </Link>
                    <Link
                      to="/news"
                      onClick={() => {
                        setIsVisibleInfoMenu(!isVisibleInfoMenu);
                      }}
                    >
                      <span>뉴스</span>
                    </Link>
                  </InfoDropdown>
                )}
              </InfoWrapper>
            </NavInfoSpan>
            <NavActiveLink to="/products">구매하기</NavActiveLink>
            <NavActiveLink to="/reviews">사용사례</NavActiveLink>
            <NavActiveLink to="/blog">블로그</NavActiveLink>
            <NavActiveLink to="/support">고객지원</NavActiveLink>
          </LinkList>
          <IconList>
            <IconItem>
              <i
                className={isVisibleUserMenu ? 'active' : ''}
                onClick={() => {
                  setIsVisibleUserMenu(!isVisibleUserMenu);
                }}
              >
                <FaUser />
              </i>
              {isVisibleUserMenu && (
                <UserDropdown>
                  <Link
                    to="/login"
                    onClick={() => {
                      setIsVisibleUserMenu(false);
                    }}
                  >
                    <span>로그인 / 회원가입</span>
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => {
                      setIsVisibleUserMenu(false);
                    }}
                  >
                    <span>장바구니</span>
                  </Link>
                  <Link
                    to="#"
                    onClick={() => {
                      setIsVisibleUserMenu(false);
                    }}
                  >
                    <span>회원정보 수정</span>
                  </Link>
                </UserDropdown>
              )}
            </IconItem>
            <IconItem>
              <i
                className={isVisibleSearchMenu ? 'active' : ''}
                onClick={() => {
                  setIsVisibleSearchMenu(!isVisibleSearchMenu);
                }}
              >
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
                    />
                    <Link
                      to={`/search?query=${searchInput}`}
                      onClick={() => {
                        setIsVisibleSearchMenu(false);
                        setSearchInput('');
                      }}
                    >
                      <FaSearch />
                    </Link>
                  </SearchInput>
                </SearchDropdown>
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
