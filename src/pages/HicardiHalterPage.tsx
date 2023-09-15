import Benefit from '../components/halter/Benefit';
import Features from '../components/halter/Features';
import HalterHeaderImage from '../components/halter/HalterHeaderImage';
import PlusList from '../components/halter/PlusList';
import Process from '../components/halter/Process';
import SideEffect from '../components/halter/SideEffect';
import Solve from '../components/halter/Solve';

const HicardiHalterPage = () => {
  return (
    <>
      <HalterHeaderImage />
      <PlusList />
      <SideEffect />
      <Solve />
      <Process />
      <Features />
      <Benefit />
    </>
  );
};

export default HicardiHalterPage;
