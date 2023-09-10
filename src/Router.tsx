import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import ClientPage from './pages/client/ClientPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
