import { useSearchParams } from 'react-router-dom';

import HeaderSearch from '../common/HeaderSearch';

const Header = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  return (
    <>
      <HeaderSearch searchRange="all" value={search ? search : ''} />
    </>
  );
};

export default Header;
