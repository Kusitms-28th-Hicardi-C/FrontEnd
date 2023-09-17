import styled from 'styled-components';
import search from '../../assets/icons/search.svg';
import arrow from '../../assets/client/arrow.svg';
import Button from '../common/Button/Button';
import { useState } from 'react';
import faqList from '../../data/faq.json';

interface FAQProps {
  faqRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div`
  width: 100%;
  padding: 4rem 15%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
`;

const SearchTop = styled.div`
  position: sticky;
  top: 4rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: 0.5rem;
`;

const SearchBox = styled.div`
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 1rem;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const SearchContentBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchContent = styled.div`
  font-size: 1.5rem;
`;

const SearchInputBox = styled.div`
  position: relative;
  width: 60%;

  img {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    bottom: 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 1.6rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3rem;
  font-size: 1.1rem;
  position: relative;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

const QuestionContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionTitle = styled.div`
  width: 35%;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue3};
  padding-top: 1rem;
`;

const QuestionBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Question = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
  cursor: pointer;

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

const FAQ = ({ faqRef }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [toggleOnQuestions, setToggleOnQuestions] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const faqCategories = [
    { key: 'all', name: '전체' },
    { key: 'feature', name: '제품 기능' },
    { key: 'way', name: '이용 방법' },
    { key: 'caution', name: '이용 시 주의사항' },
    { key: 'doctor', name: '의료진 Q&A' },
  ];

  return (
    <Container ref={faqRef}>
      <Title>FAQ</Title>
      <SearchTop>
        <SearchBox>
          <SearchContentBox>
            <SearchContent>자주 묻는 질문을 </SearchContent>
            <SearchContent>정리했어요 </SearchContent>
          </SearchContentBox>
          <SearchInputBox>
            <SearchInput
              placeholder="키워드를 입력하세요"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <img src={search} alt="search" />
          </SearchInputBox>
        </SearchBox>
        <ButtonBox>
          {faqCategories.map((category, index) => (
            <Button
              key={index}
              active={activeCategory === category.key}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.name}
            </Button>
          ))}
        </ButtonBox>
      </SearchTop>
      {faqCategories
        .filter((category) => category.key === activeCategory || activeCategory === 'all')
        .filter((category) => category.key !== 'all')
        .map((category, index) => (
          <QuestionContainer key={index}>
            <QuestionTitle>{category.name}</QuestionTitle>
            <QuestionBox>
              {faqList
                .filter((faq) => faq.category === category.key)
                .filter((faq) => faq.question.includes(searchInput) || faq.answer.includes(searchInput))
                .map((faq) => (
                  <>
                    <Question
                      key={faq.id}
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
                  </>
                ))}
            </QuestionBox>
          </QuestionContainer>
        ))}
    </Container>
  );
};

export default FAQ;
