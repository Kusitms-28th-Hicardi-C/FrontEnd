import { Link } from 'react-router-dom';
import styled from 'styled-components';

const productListData = [
  {
    id: 1,
    name: '하이카디플러스 HiCardi+',
    description: '편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi+',
    price: 2046000,
    category: '기기 본체',
  },
  {
    id: 2,
    name: '하이카디플러스 HiCardi+ H100',
    description: '메모리 내장형 제품편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션HiCardi+ H100',
    price: 1320000,
    category: '기기 본체',
  },
  {
    id: 3,
    name: '하이카디 HiCardi',
    description: '편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi+',
    price: 2046000,
    category: '기기 본체',
  },
  {
    id: 4,
    name: '부정맥 전문의 원격 판독 서비스',
    description: '임상병리사와 부정맥 전문의가 부정맥 진단 및 레포트 발행을 대행',
    price: 27500,
    category: '추가 서비스',
  },
  {
    id: 5,
    name: '심전도 전극 리필, 대형 20매',
    description: '하이카디플러스 H100, 하이카디플러스 전용 리필 전극',
    price: 22000,
    category: '추가 용품',
  },
  {
    id: 6,
    name: '심전도 전극 리필, 소형 20매',
    description: '하이카디 전용 리필 전극',
    price: 16500,
    category: '추가 용품',
  },
  {
    id: 7,
    name: '노닌 펄스옥시미터 3150',
    description: '하이카디 플러스와 연동이 가능한 손목밴드형 산소포화도 측정 장비',
    price: 1540000,
    category: '추가 용품',
  },
  {
    id: 8,
    name: '노닌 펄스옥시미터 3230',
    description: '하이카디 플러스와 연동이 가능한 클립형 산소포화도 측정 장비',
    price: 550000,
    category: '추가 용품',
  },
  {
    id: 9,
    name: '갤럭시A13',
    description: '하이카디 서비스에 필요한 스마트폰(미개통)',
    price: 275000,
    category: '추가 용품',
  },
];

const ProductListBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ProductItem = styled(Link)`
  border: 1px solid #cfcfcf;
`;

const GrayBox = styled.div`
  height: 300px;
  background-color: #d9d9d9;
`;

const ContentArea = styled.div`
  padding: 1.5rem 2rem 2rem 2rem;

  h2 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.75rem;
  }

  b {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 32px;
  font-weight: 500;
`;

const ProductList = () => {
  return (
    <ProductListBlock>
      {productListData.map((product) => (
        <ProductItem to={`/products/${product.id}`} key={product.id}>
          <GrayBox></GrayBox>
          <ContentArea>
            <Badge>{product.category}</Badge>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <b>{product.price.toLocaleString()}원</b>
          </ContentArea>
        </ProductItem>
      ))}
    </ProductListBlock>
  );
};

export default ProductList;
