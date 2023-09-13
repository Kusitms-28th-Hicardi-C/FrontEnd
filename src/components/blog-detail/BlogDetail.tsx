import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { post } from '../../interfaces/post';
import blogList from '../../datas/blog.json';

const BlogDetailBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 3rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    text-align: center;
  }

  h5 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray4};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    text-align: start;
    margin-bottom: 1.5rem;
  }
`;

const SmallTextAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  small {
    color: ${({ theme }) => theme.colors.gray5};
  }

  a {
    background-color: ${({ theme }) => theme.colors.blue4};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

const BlogDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<post | null>(null);

  useEffect(() => {
    if (postId === '') {
      navigate(-1);
    } else {
      const foundedPost: post = blogList.filter((post) => post.id === Number(postId))[0];
      setPost(foundedPost);
    }
  }, []);

  return (
    <BlogDetailBlock>
      <h1>{post?.title}</h1>
      <h5>서브 타이틀</h5>
      <SmallTextAndLink>
        <small>4분 전 | {post?.date}</small>
        <Link to="/blog">블로그 목록 보기</Link>
      </SmallTextAndLink>
      <img src={post?.imageUrl} alt="블로그 이미지" />
      <h2>1. 문장 단락 A</h2>
      <p>
        일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사
      </p>
      <h2>2. 문장 단락 B</h2>
      <p>
        일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사오육칠팔구영일이삼사
      </p>
    </BlogDetailBlock>
  );
};

export default BlogDetail;
