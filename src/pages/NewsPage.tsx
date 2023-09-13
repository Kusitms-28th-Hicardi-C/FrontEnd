import ArticleList from '../components/news/ArticleList';
import NewsHeaderImage from '../components/news/NewsHeaderImage';
import Heading from '../components/news/Heading';

const NewsPage = () => {
  return (
    <>
      <NewsHeaderImage />
      <Heading />
      <ArticleList />
    </>
  );
};

export default NewsPage;
