import { useQuery } from 'react-query';
import { hicardiAxios as axios } from '../../apis/axios';
import { faqKeys } from '../../constants/supportKeys';
import { faq } from '../../interfaces/support';

async function getFAQList(): Promise<faq> {
  const { data } = await axios.get(`/faq/list`, {});
  return data;
}

interface UseBlogList {
  faqList?: faq;
}

export function useFAQList(): UseBlogList {
  const { data: faqList } = useQuery(faqKeys.all, () => getFAQList());
  return { faqList };
}
