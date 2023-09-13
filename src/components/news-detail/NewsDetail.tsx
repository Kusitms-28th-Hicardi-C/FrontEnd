import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Article from '../common/Article';
import { article } from '../../interfaces/article';
import articleList from '../../datas/news.json';

const NewsDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<article | null>(null);

  useEffect(() => {
    if (articleId === '') {
      navigate(-1);
    } else {
      const foundedArticle: article = articleList.filter((article) => article.id === Number(articleId))[0];
      setArticle(foundedArticle);
    }
  }, []);

  return (
    <>
      <Article
        title={article?.title}
        content={article?.content}
        subtitle={article?.subtitle}
        date={article?.date}
        imageUrl={article?.imageUrl}
        press={article?.press}
        type="뉴스"
      />
    </>
  );
};

export default NewsDetail;
