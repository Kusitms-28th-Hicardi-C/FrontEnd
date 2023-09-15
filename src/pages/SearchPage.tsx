import GrayBackground from '../components/common/GrayBackground';
import BlogSection from '../components/search/BlogSection';
import FAQSection from '../components/search/FAQSection';
import Header from '../components/search/Header';
import ProductSection from '../components/search/ProductSection';

const SearchPage = () => {
  return (
    <>
      <Header />
      <GrayBackground>
        <ProductSection />
        <BlogSection />
        <FAQSection />
      </GrayBackground>
    </>
  );
};

export default SearchPage;
