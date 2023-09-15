import Pagination from '../common/Pagination';
import Heading from './Heading';
import PostTable from './PostTable';
import WhiteBox from './WhiteBox';

import newsList from '../../data/news.json';

const FAQSection = () => {
  return (
    <>
      <WhiteBox>
        <Heading h1="뉴스" span="(검색결과 4건)" />
        <PostTable list={newsList} type="news" />
        <Pagination />
      </WhiteBox>
    </>
  );
};

export default FAQSection;
