import { NavLink } from 'react-router-dom';

interface NavActiveLinkProps {
  to: string;
  children: React.ReactNode;
}

const linkDefaultStyle = {
  fontWeight: 600,
};

const linkActiveStyle = {
  ...linkDefaultStyle,
  color: '#20C5FF',
};

const NavActiveLink = ({ to, children, ...rest }: NavActiveLinkProps) => {
  return (
    <NavLink to={to} style={({ isActive }) => (isActive ? linkActiveStyle : linkDefaultStyle)} {...rest}>
      {children}
    </NavLink>
  );
};

export default NavActiveLink;
