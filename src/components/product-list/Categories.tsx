import styled from 'styled-components';

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 1rem auto;
`;

const BadgeList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;

  li {
    background-color: #d8d8d8;
    border-radius: 32px;
    font-weight: 500;
    padding: 0.375rem 1rem;
    cursor: pointer;
  }
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
        <li>전체</li>
        <li>기기 본체</li>
        <li>추가 물품</li>
        <li>추가 서비스</li>
      </BadgeList>
      <CartButton>장바구니 바로가기</CartButton>
    </CategoriesBlock>
  );
};

export default Categories;
