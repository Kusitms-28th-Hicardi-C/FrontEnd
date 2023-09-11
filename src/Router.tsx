import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Agreement from './components/auth/Agreement';
import Information from './components/auth/Information';
import Complete from './components/auth/Complete';
import MainPage from './pages/MainPage';
import ClientPage from './pages/ClientPage';
import ProductListPage from './pages/ProductListPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollTop from './components/common/ScrollTop';
import ProductDetailPage from './pages/ProductDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}>
          <Route path="agreement" element={<Agreement />} />
          <Route path="information" element={<Information />} />
          <Route path="complete" element={<Complete />} />
        </Route>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
