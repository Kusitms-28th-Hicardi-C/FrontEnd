import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
