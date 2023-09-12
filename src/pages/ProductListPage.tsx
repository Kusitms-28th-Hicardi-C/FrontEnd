import Categories from '../components/product-list/Categories';
import GrayWrapper from '../components/product-list/GrayWrapper';
import Heading from '../components/product-list/Heading';
import ProductList from '../components/product-list/ProductList';

const ProductListPage = () => {
  return (
    <>
      <GrayWrapper>
        <Heading />
        <Categories />
        <ProductList />
      </GrayWrapper>
    </>
  );
};

export default ProductListPage;
