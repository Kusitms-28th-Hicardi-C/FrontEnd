import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

interface ArticleProps {
  title?: string;
  content?: string;
  subtitle?: string;
  imageUrl?: string;
  date?: string;
  type?: string;
  press?: string;
}

const ArticleBlock = styled(motion.div)`
  width: 50%;
  margin: 0 auto;
  padding: 3rem 0;

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
    line-height: 1.5;
    font-size: 1.05rem;
  }

  @media screen and (max-width: 992px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    padding-top: 2rem;
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

const SmallText = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray5};
  text-align: right;
`;

const Article = ({ title, content, subtitle, imageUrl, date, press, type }: ArticleProps) => {
  return (
    <ArticleBlock initial="hidden" animate="visible" variants={TextAnimation}>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      {type === '블로그' ? (
        <SmallTextAndLink>
          <small>4분 전 | {date}</small>
          <Link to="/blog">{type} 목록 보기</Link>
        </SmallTextAndLink>
      ) : (
        <SmallText>
          <small>
            {press} | {date}
          </small>
        </SmallText>
      )}
      <img src={imageUrl} alt="블로그 이미지" />
      <p>{content}</p>
    </ArticleBlock>
  );
};

export default Article;
