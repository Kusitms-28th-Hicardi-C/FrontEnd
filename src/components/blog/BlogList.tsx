import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { blogListState } from '../../states/blog';

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
`;

const BlogItemBlock = styled(Link)`
  grid-column: auto / span 3;

  &:nth-child(n + 5) {
    grid-column: auto / span 2;
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 24px;
    overflow: hidden;
    object-fit: cover;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

const BlogItemText = styled.div`
  padding: 1rem;
`;

const BlogItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  b {
    font-size: 1rem;
  }

  small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const BlogItem = ({ id, title, category, imageUrl, date }: BlogItemProps) => {
  return (
    <BlogItemBlock to={`/blog/${id}`}>
      <img src={require(`../../assets/${imageUrl}`)} alt="블로그 이미지" />
      <BlogItemText>
        <BlogItemTop>
          <b>{category}</b>
          <small>{date} | 9분 전</small>
        </BlogItemTop>
        <h1>{title}</h1>
      </BlogItemText>
    </BlogItemBlock>
  );
};

const BlogList = () => {
  const blogList = useRecoilValue(blogListState);

  return (
    <BlogListBlock>
      {blogList.map((blog) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          category={blog.category}
          imageUrl={blog.imageUrl}
          date={blog.date}
        />
      ))}
    </BlogListBlock>
  );
};

export default BlogList;
