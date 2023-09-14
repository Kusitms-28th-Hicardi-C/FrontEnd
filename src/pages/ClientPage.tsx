import { useRef } from 'react';
import FAQ from '../components/client/FAQ';
import HowToUse from '../components/client/HowToUse';
import Product from '../components/client/Product';
import Support from '../components/client/Support';
import UsageInquiry from '../components/client/UsageInquiry';

const ClientPage = () => {
  const howToUseRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Support howToUseRef={howToUseRef} faqRef={faqRef} productRef={productRef} />
      <UsageInquiry />
      <HowToUse howToUseRef={howToUseRef} />
      <Product productRef={productRef} />
      <FAQ faqRef={faqRef} />
    </>
  );
};

export default ClientPage;
