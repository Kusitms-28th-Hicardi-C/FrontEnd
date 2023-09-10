import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/main';
import ClientPage from './pages/client/client';

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
