import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IoIosArrowForward } from 'react-icons/io';

import { post } from '../../interfaces/post';
import { article } from '../../interfaces/article';

interface PostTableProps {
  list: post[] | article[];
  type: string;
}

const PostTableBlock = styled.div`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`;

const postTableRowStyle = css`
  display: grid;
  grid-template-columns: 10% 25% 45% 20%;
  padding: 0.75rem 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
  font-size: 0.75rem;
`;

const PostTableHead = styled.div`
  ${postTableRowStyle}
  color: ${({ theme }) => theme.colors.blue1};
  font-weight: 500;
  padding-top: 0;
`;

const PostTableBody = styled.div``;

const PostTableRow = styled.div`
  ${postTableRowStyle}

  .number, .date {
    color: ${({ theme }) => theme.colors.gray3};
  }

  .title {
    font-weight: 600;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.blue2};
    font-weight: 600;
  }
`;

const PostTable = ({ list, type }: PostTableProps) => {
  return (
    <PostTableBlock>
      <PostTableHead>
        <span>번호</span>
        <span>일시</span>
        <span>제목</span>
        <span></span>
      </PostTableHead>
      <PostTableBody>
        {list.map((item, index) => (
          <PostTableRow key={item.id}>
            <span className="number">{index + 1}</span>
            <span className="date">{item.date}</span>
            <span className="title">{item.title}</span>
            <Link to={type === 'blog' ? `/blog/${item.id}` : `/news/article/${item.id}`}>
              <span>자세히 보기</span>
              <IoIosArrowForward />
            </Link>
          </PostTableRow>
        ))}
      </PostTableBody>
    </PostTableBlock>
  );
};

export default PostTable;
