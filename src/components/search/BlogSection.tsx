import WhiteBox from './WhiteBox';
import Heading from './Heading';
import PostTable from './PostTable';
import Pagination from '../common/Pagination';
import blogList from '../../data/blog.json';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogSection = () => {
  const [searchParams] = useSearchParams();
  const [filteredBlogList, setFilteredBlogList] = useState<
    { id: number; title: string; category: string; imageUrl: string; date: string }[]
  >([]);

  useEffect(() => {
    setFilteredBlogList(blogList.filter((blog) => blog.title.includes(searchParams.get('query') || '')));
  }, [searchParams]);

  return (
    <>
      {filteredBlogList.length === 0 ? null : (
        <WhiteBox>
          <Heading h1="블로그" span={`(검색결과 ${filteredBlogList.length}건)`} />
          <PostTable list={filteredBlogList} type="blog" />
          <Pagination />
        </WhiteBox>
      )}
    </>
  );
};

export default BlogSection;
