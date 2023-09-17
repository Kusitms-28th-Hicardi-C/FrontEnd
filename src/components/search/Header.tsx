import { useSearchParams } from 'react-router-dom';

import HeaderSearch from '../common/HeaderSearch';
import { useEffect, useState } from 'react';

const Header = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const queryString = searchParams.get('query');
    setQuery(queryString || '');
  }, [searchParams]);

  return (
    <>
      <HeaderSearch searchRange="all" value={query} onChange={setQuery} />
    </>
  );
};

export default Header;
