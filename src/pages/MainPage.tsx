import Navbar from '../components/navbar/Navbar';
import Banner from '../components/main/Banner';
import Intro from '../components/main/Intro';
import Support from '../components/main/Support';
import Review from '../components/main/Review';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Intro />
      <Support />
      <Review />
    </>
  );
};

export default MainPage;