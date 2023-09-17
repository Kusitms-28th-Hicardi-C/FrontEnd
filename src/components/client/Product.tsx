import styled from 'styled-components';
import { hicardiAxios as axios } from '../../apis/axios';

interface ProductProps {
  productRef: React.RefObject<HTMLDivElement>;
}

const Banner = styled.div`
  background: #f8f9fb;
  width: 100%;
  padding: 5rem 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  margin-top: 1.2rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Product = ({ productRef }: ProductProps) => {
  async function download(): Promise<void> {
    const { data } = await axios.get(`/test/download/productInformation.pdf`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([data]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'productInformation.pdf');
    document.body.appendChild(link);
    link.click();
  }

  const handleDownloadButtonClick = () => {
    download();
  };

  return (
    <Banner ref={productRef}>
      <SubTitle>하이카디에 대해 더 궁금하신가요?</SubTitle>
      <Title>하이카디 제품 소개서</Title>
      <Button onClick={handleDownloadButtonClick}>
        <img src={'/images/supports/download.svg'} alt="download" />
        다운로드 하기
      </Button>
    </Banner>
  );
};

export default Product;
