import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import FAQList from '../../data/faq.json';
import WhiteBox from './WhiteBox';
import Heading from './Heading';
import arrow from '../../assets/client/arrow.svg';

const Question = styled.li`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
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
  const [toggleOnQuestions, setToggleOnQuestions] = useState<number[]>([]);

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
              <Question
                onClick={() => {
                  if (toggleOnQuestions.indexOf(faq.id) === -1) {
                    setToggleOnQuestions([...toggleOnQuestions, faq.id]);
                  } else {
                    setToggleOnQuestions(toggleOnQuestions.filter((questionId) => questionId !== faq.id));
                  }
                }}
              >
                <div>
                  <span>Q.</span>
                  {faq.question}
                </div>
                <img src={arrow} alt="arrow" />
              </Question>
              {toggleOnQuestions.indexOf(faq.id) !== -1 ? <Answer>{faq.answer}</Answer> : null}
            </ul>
          ))}
        </WhiteBox>
      )}
    </>
  );
};

export default FAQSection;
