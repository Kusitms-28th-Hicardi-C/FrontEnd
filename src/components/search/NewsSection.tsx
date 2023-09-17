import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Pagination from '../common/Pagination';
import Heading from './Heading';
import PostTable from './PostTable';
import WhiteBox from './WhiteBox';

import newsList from '../../data/news.json';

const NewsSection = () => {
  const [searchParams] = useSearchParams();

  const [filteredNewsList, setFilteredNewsList] = useState<
    { id: number; title: string; subtitle: string; content: string; press: string; date: string; imageUrl: string }[]
  >([]);

  useEffect(() => {
    setFilteredNewsList(
      newsList.filter(
        (news) =>
          news.title.includes(searchParams.get('query') || '') ||
          news.subtitle.includes(searchParams.get('query') || '') ||
          news.content.includes(searchParams.get('query') || '') ||
          news.press.includes(searchParams.get('query') || ''),
      ),
    );
  }, [searchParams]);

  return (
    <>
      {filteredNewsList.length === 0 ? null : (
        <WhiteBox>
          <Heading h1="뉴스" span={`(검색결과 ${filteredNewsList.length}건)`} />
          <PostTable list={filteredNewsList} type="news" />
          <Pagination />
        </WhiteBox>
      )}
    </>
  );
};

export default NewsSection;
