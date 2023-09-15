import { Link } from 'react-router-dom';
import styled from 'styled-components';

import blogList from '../../data/blog.json';
import { post } from '../../interfaces/post';

interface BlogItemProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

const BlogListBlock = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const BlogItemBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  grid-column: auto / span 3;

  &:nth-child(n + 5) {
    grid-column: auto / span 2;

    @media screen and (max-width: 992px) {
      grid-column: auto / span 6;
    }
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 24px;
    overflow: hidden;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    grid-column: auto / span 6;
    flex-direction: row;

    img {
      width: 50%;
      height: auto;
    }
  }
`;

const BlogItemText = styled.div`
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }

  .date {
    @media screen and (max-width: 768px) {
      display: block;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.gray5};
      margin-top: 0.5rem;
    }
  }
`;

const BlogItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  b {
    font-size: 1rem;
  }

  .date {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray5};

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const BlogItem = ({ id, title, category, imageUrl, date }: BlogItemProps) => {
  return (
    <BlogItemBlock to={`/blog/${id}`}>
      <img src={imageUrl} alt="블로그 이미지" />
      <BlogItemText>
        <BlogItemTop>
          <b>{category}</b>
          <small className="date">{date} | 9분 전</small>
        </BlogItemTop>
        <h1>{title}</h1>
        <span className="date">
          <small>{date} | 9분 전</small>
        </span>
      </BlogItemText>
    </BlogItemBlock>
  );
};

const BlogList = () => {
  return (
    <BlogListBlock>
      {blogList.map((post: post) => (
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category}
          imageUrl={post.imageUrl}
          date={post.date}
        />
      ))}
    </BlogListBlock>
  );
};

export default BlogList;
