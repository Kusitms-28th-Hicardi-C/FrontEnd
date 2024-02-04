import { Link } from 'react-router-dom';
import styled from 'styled-components';

import blogList from '../../data/blog.json';
import { post } from '../../interfaces/post';
import { useState } from 'react';
import Button from '../common/Button/Button';
// import { useBlogList } from '../../hooks/blog/useBlogList';

interface BlogItemProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 992px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    padding-top: 2rem;
  }
`;

const Categories = styled.div`
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

const BlogListBlock = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  padding: 2rem 0;
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

  @media screen and (max-width: 992px) {
    grid-column: auto / span 6;
    flex-direction: row;
  }
`;

const BlogImage = styled.div`
  aspect-ratio: 1.64 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 32px;
  }

  @media screen and (max-width: 992px) {
    img {
      width: 100%;
      height: 300px;
      border-radius: 24px;
      overflow: hidden;
      object-fit: cover;
    }

    @media screen and (max-width: 992px) {
      img {
        width: 300px;
      }
    }

    @media screen and (max-width: 727px) {
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
      <BlogImage>
        <img src={imageUrl} alt="블로그 이미지" />
      </BlogImage>
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
  const [activeCategory, setActiveCategory] = useState('전체');
  const categoriesData = ['전체', '사용방법', '기능소개'];

  return (
    <Container>
      <Categories>
        {categoriesData.map((category) => {
          if (category === activeCategory) {
            return (
              <Button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                }}
                active
              >
                {category}
              </Button>
            );
          }
          return (
            <Button
              key={category}
              onClick={() => {
                setActiveCategory(category);
              }}
            >
              {category}
            </Button>
          );
        })}
      </Categories>
      <BlogListBlock>
        {blogList
          .filter((blog) => blog.category === activeCategory || activeCategory === '전체')
          .map((post: post) => (
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
    </Container>
  );
};

export default BlogList;
