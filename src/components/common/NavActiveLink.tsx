import { NavLink } from 'react-router-dom';

interface NavActiveLinkProps {
  to: string;
  children: React.ReactNode;
}

const linkActiveStyle = {
  color: '#20C5FF',
};

const NavActiveLink = ({ to, children, ...rest }: NavActiveLinkProps) => {
  return (
    <NavLink to={to} style={({ isActive }) => (isActive ? linkActiveStyle : undefined)} {...rest}>
      {children}
    </NavLink>
  );
};

export default NavActiveLink;
