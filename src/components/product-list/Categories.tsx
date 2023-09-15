import styled from 'styled-components';

import { BsCart4 } from 'react-icons/bs';

import Button from '../common/Button/Button';
import { useRecoilState } from 'recoil';
import { productCategoryState } from '../../states/product';

interface BadgeProps {
  type: string;
  children: React.ReactNode;
}

const CategoriesBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const BadgeList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    gap: 0.5rem;
  }

  @media screen and (max-width: 550px) {
    gap: 0.25rem;
  }
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

  span {
    font-weight: 500;
  }

  i {
    display: none;
  }

  @media screen and (max-width: 992px) {
    padding: 0.75rem 0.75rem;

    span {
      display: none;
    }

    i {
      display: inline;
    }
  }
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
      <CartButton>
        <span>장바구니 바로가기</span>
        <i>
          <BsCart4 />
        </i>
      </CartButton>
    </CategoriesBlock>
  );
};

export default Categories;
