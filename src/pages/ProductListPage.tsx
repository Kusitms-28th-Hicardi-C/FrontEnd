import Navbar from '../components/navbar/Navbar';
import Categories from '../components/product-list/Categories';
import Heading from '../components/product-list/Heading';
import ProductList from './ProductList';

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Categories />
      <ProductList />
    </>
  );
};

export default ProductListPage;
