import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import ClientPage from './pages/client/ClientPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/client/support" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
