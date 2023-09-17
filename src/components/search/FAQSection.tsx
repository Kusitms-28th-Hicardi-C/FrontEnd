import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import FAQList from '../../data/fag-for-searching.json';
import WhiteBox from './WhiteBox';
import Heading from './Heading';
import arrow from '../../assets/client/arrow.svg';

const Question = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
  cursor: pointer;
  font-weight: 700;

  &:first-child {
    padding-top: 1rem;
  }
  &:last-child {
    border-bottom: none;
  }
  span {
    color: ${({ theme }) => theme.colors.blue1};
    font-weight: 800;
    margin-right: 0.5rem;
  }
`;

const Answer = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  line-height: 1.4;
`;

const FAQSection = () => {
  const [searchParams] = useSearchParams();

  const [filteredFAQList, setFilteredFAQList] = useState<
    { id: number; category: string; question: string; answer: string }[]
  >([]);

  useEffect(() => {
    setFilteredFAQList(
      FAQList.filter((faq) => {
        return (
          faq.question.includes(searchParams.get('query') || '') || faq.answer.includes(searchParams.get('query') || '')
        );
      }),
    );
  }, [searchParams]);

  return (
    <>
      {filteredFAQList.length === 0 ? null : (
        <WhiteBox>
          <Heading h1="FAQ" span={`(검색결과 ${filteredFAQList.length}건)`} />
          {filteredFAQList.map((faq) => (
            <ul key={faq.id}>
              <Question>
                <div>
                  <span>Q.</span>
                  {faq.question}
                </div>
                <img src={arrow} alt="arrow" />
              </Question>
              {<Answer>{faq.answer}</Answer>}
            </ul>
          ))}
        </WhiteBox>
      )}
    </>
  );
};

export default FAQSection;

// import { useSearchParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import Pagination from '../common/Pagination';
// import Heading from './Heading';
// import PostTable from './PostTable';
// import WhiteBox from './WhiteBox';

// import newsList from '../../data/news.json';

// const NewsSection = () => {
//   const [searchParams] = useSearchParams();

//   const [filteredNewsList, setFilteredNewsList] = useState<
//     { id: number; title: string; subtitle: string; content: string; press: string; date: string; imageUrl: string }[]
//   >([]);

//   useEffect(() => {
//     setFilteredNewsList(
//       newsList.filter(
//         (news) =>
//           news.title.includes(searchParams.get('query') || '') ||
//           news.subtitle.includes(searchParams.get('query') || '') ||
//           news.content.includes(searchParams.get('query') || '') ||
//           news.press.includes(searchParams.get('query') || ''),
//       ),
//     );
//   }, []);

//   return (
//     <>
//       <WhiteBox>
//         <Heading h1="뉴스" span={`(검색결과 ${filteredNewsList.length}건)`} />
//         <PostTable list={filteredNewsList} type="news" />
//         <Pagination />
//       </WhiteBox>
//     </>
//   );
// };

// export default NewsSection;
