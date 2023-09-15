import styled from 'styled-components';

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  img {
    height: 1rem;
  }
`;

const Pagination = () => {
  return (
    <PaginationBlock>
      <img src="/images/icons/left-arrow.svg" alt="왼쪽 화살표" />
      <span>1 / 5</span>
      <img src="/images/icons/right-arrow.svg" alt="오른쪽 화살표" />
    </PaginationBlock>
  );
};

export default Pagination;
