import styled from 'styled-components';

import Button from '../common/Button';

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Badge = styled(Button)`
  font-weight: 500;
`;

const CartButton = styled.button`
  background-color: #d8d8d8;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      <BadgeList>
        <Badge active>전체</Badge>
        <Badge>기기 본체</Badge>
        <Badge>추가 물품</Badge>
        <Badge>추가 서비스</Badge>
      </BadgeList>
      <CartButton>장바구니 바로가기</CartButton>
    </CategoriesBlock>
  );
};

export default Categories;
