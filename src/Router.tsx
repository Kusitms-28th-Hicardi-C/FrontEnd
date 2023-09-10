import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ClientPage from './pages/ClientPage';
import ProductListPage from './pages/ProductListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
