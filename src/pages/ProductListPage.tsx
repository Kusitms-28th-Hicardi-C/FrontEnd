import Categories from '../components/product-list/Categories';
import Heading from '../components/product-list/Heading';
import ProductList from '../components/product-list/ProductList';
import GrayBackground from '../components/common/GrayBackground';

const ProductListPage = () => {
  return (
    <>
      <GrayBackground>
        <Heading />
        <Categories />
        <ProductList />
      </GrayBackground>
    </>
  );
};

export default ProductListPage;
