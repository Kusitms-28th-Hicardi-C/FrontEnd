import { useSearchParams } from 'react-router-dom';

import HeaderSearch from '../common/HeaderSearch';

const Header = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <>
      <HeaderSearch searchRange="all" value={query ? query : ''} />
    </>
  );
};

export default Header;
