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
  width: 30%;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue3};
`;

const QuestionBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Question = styled.li`
  font-size: 1.2rem;
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

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ faqRef }: FAQProps) => {
  const [selectedSection, setSelectedSection] = useState('전체');
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: number[] }>({});

  const handleSectionClick = (sectionName: string) => {
    setSelectedSection(sectionName);
  };
  const handleQuestionClick = (sectionName: string, questionIndex: number) => {
    if (expandedQuestions[sectionName]?.includes(questionIndex)) {
      setExpandedQuestions({
        ...expandedQuestions,
        [sectionName]: expandedQuestions[sectionName].filter((index) => index !== questionIndex),
      });
    } else {
      setExpandedQuestions({
        ...expandedQuestions,
        [sectionName]: [...(expandedQuestions[sectionName] || []), questionIndex],
      });
    }
  };

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
            <SearchInput placeholder="키워드를 입력하세요" />
            <img src={search} alt="search" />
          </SearchInputBox>
        </SearchBox>

        <ButtonBox>
          <Button active={selectedSection === '전체'} onClick={() => handleSectionClick('전체')}>
            전체
          </Button>
          {faqList.map((section, sectionIndex) => (
            <Button
              key={sectionIndex}
              active={selectedSection === Object.keys(section)[0]}
              onClick={() => handleSectionClick(Object.keys(section)[0])}
            >
              {Object.keys(section)[0]}
            </Button>
          ))}
        </ButtonBox>
      </SearchTop>

      {faqList.map((section, sectionIndex) => {
        const sectionName = Object.keys(section)[0];
        if (selectedSection === '전체' || selectedSection === sectionName) {
          const sectionData = Object.values(section)[0];
          return (
            <QuestionContainer key={sectionIndex}>
              <QuestionTitle>{sectionName}</QuestionTitle>
              <QuestionBox>
                {sectionData.map((item: FAQItem, itemIndex: number) => (
                  <>
                    <Question key={itemIndex} onClick={() => handleQuestionClick(sectionName, itemIndex)}>
                      <div>
                        <span>Q.</span>
                        {item.question}
                      </div>
                      <img src={arrow} alt="arrow" />
                    </Question>
                    {expandedQuestions[sectionName]?.includes(itemIndex) && <Answer>{item.answer}</Answer>}
                  </>
                ))}
              </QuestionBox>
            </QuestionContainer>
          );
        } else {
          return null;
        }
      })}
    </Container>
  );
};

export default FAQ;
