import styled from 'styled-components';

interface HeaderProps {
  children: React.ReactNode;
}

const HeaderStyle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
  padding: 1.8rem 0;
  white-space: nowrap;
`;

const Header = ({ children }: HeaderProps) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
