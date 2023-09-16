import { useQuery } from 'react-query';
import { hicardiAxios as axios } from '../../apis/axios';
import { BlogList } from '../../interfaces/blog';
import { blogKeys } from '../../constants/blogKeys';

async function getBlogList(): Promise<BlogList> {
  const { data } = await axios.get(`/api/v1/blog/list`, {});
  return data;
}

interface UseBlogList {
  blogLists?: BlogList;
}

export function useBlogList(): UseBlogList {
  const { data: blogLists } = useQuery(blogKeys.all, () => getBlogList());
  return { blogLists };
}
