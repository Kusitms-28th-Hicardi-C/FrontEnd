import styled from 'styled-components';

import Button from '../common/Button/Button';
import { useRecoilState } from 'recoil';
import { productCategoryState } from '../../states/product';

interface BadgeProps {
  type: string;
  children: React.ReactNode;
}

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const BadgeList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

const BadgeBlock = styled(Button)`
  font-weight: 500;
`;

const Badge = ({ type, children }: BadgeProps) => {
  const [category, setCategory] = useRecoilState(productCategoryState);

  return category === type ? (
    <BadgeBlock
      onClick={() => {
        setCategory(type);
      }}
      active
    >
      {children}
    </BadgeBlock>
  ) : (
    <BadgeBlock
      onClick={() => {
        setCategory(type);
      }}
    >
      {children}
    </BadgeBlock>
  );
};

const CartButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue3};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  font-weight: 500;
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      <BadgeList>
        <Badge type="전체">전체</Badge>
        <Badge type="기기 본체">기기 본체</Badge>
        <Badge type="추가 용품">추가 용품</Badge>
        <Badge type="추가 서비스">추가 서비스</Badge>
      </BadgeList>
      <CartButton>장바구니 바로가기</CartButton>
    </CategoriesBlock>
  );
};

export default Categories;
