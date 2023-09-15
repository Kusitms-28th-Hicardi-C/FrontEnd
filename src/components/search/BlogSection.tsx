import WhiteBox from './WhiteBox';
import Heading from './Heading';
import PostTable from './PostTable';
import Pagination from '../common/Pagination';
import blogList from '../../data/blog.json';

const BlogSection = () => {
  return (
    <>
      <WhiteBox>
        <Heading h1="블로그" span="(검색결과 4건)" />
        <PostTable list={blogList} type="blog" />
        <Pagination />
      </WhiteBox>
    </>
  );
};

export default BlogSection;
