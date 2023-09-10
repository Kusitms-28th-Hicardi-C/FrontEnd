import FAQ from '../../components/client/FAQ';
import HowToUse from '../../components/client/HowToUse';
import Inquiry from '../../components/client/Inquiry';
import Product from '../../components/client/Product';
import Support from '../../components/client/Support';
import UsageInquiry from '../../components/client/UsageInquiry';

const ClientPage = () => {
  return (
    <>
      <Support />
      <UsageInquiry />
      <HowToUse />
      <Product />
      <FAQ />
      <Inquiry />
    </>
  );
};

export default ClientPage;
