import HowToUse from '../../components/client/HowToUse';
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
    </>
  );
};

export default ClientPage;
