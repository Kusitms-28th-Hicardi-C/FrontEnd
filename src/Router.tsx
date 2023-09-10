import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import ClientPage from './pages/client/ClientPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Agreement from './components/auth/Agreement';
import Information from './components/auth/Information';
import Complete from './components/auth/Complete';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}>
          <Route path="agreement" element={<Agreement />} />
          <Route path="information" element={<Information />} />
          <Route path="complete" element={<Complete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
