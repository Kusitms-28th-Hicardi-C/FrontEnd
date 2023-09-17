import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import GrayBackground from '../components/common/GrayBackground';
import BlogSection from '../components/search/BlogSection';
import NewsSection from '../components/search/NewsSection';
import Header from '../components/search/Header';
import ProductSection from '../components/search/ProductSection';
import FAQSection from '../components/search/FAQSection';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchRange, setSearchRange] = useState('all');

  useEffect(() => {
    setSearchRange(searchParams.get('range') || '');
  }, [searchParams]);

  return (
    <>
      <Header />
      <GrayBackground>
        {searchRange === 'all' || searchRange === 'product' ? <ProductSection /> : null}
        {searchRange === 'all' || searchRange === 'blog' ? <BlogSection /> : null}
        {searchRange === 'all' || searchRange === 'news' ? <NewsSection /> : null}
        {searchRange === 'all' || searchRange === 'faq' ? <FAQSection /> : null}
      </GrayBackground>
    </>
  );
};

export default SearchPage;
