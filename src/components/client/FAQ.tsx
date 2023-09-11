import styled from 'styled-components';
import search from '../../assets/icons/search.svg';
import arrow from '../../assets/client/arrow.svg';
import Button from '../common/Button';

const questionList: {
  [key: string]: string[];
}[] = [
  {
    '제품 기능': [
      '하이카디 패치는 무엇을 탐지해 낼 수 있나요?',
      '하이카디 패치의 배터리는 최대 며칠동안 착용할 수 있나요?',
      '하이카디 패치를 착용하고 샤워할 수 있나요?',
      '하이카디 패치를 착용 후 일상 활동을 해도 될까요?',
      '하이카디 패치와 스마트폰 간의 연결은 어떻게 이루어지며 연결 범위는 어느 정도인가요?',
    ],
  },
  {
    '이용 방법': [
      '하이카디 패치는 어떻게 착용해야 하나요?',
      '배터리는 어떻게 교체하나요?',
      '패치에 부착된 전극은 얼마나 부착하고 있어야 하나요?',
    ],
  },
  {
    '이용 시 주의사항': [
      '하이카디 패치가 떨어지거나 제대로 작동하지 않으면 어떻게 합니까?',
      '하이카디 패치를 착용하는 도중 너무 가렵거나 따가움을 느끼면 어떻게 해야 하나요?',
      '하이카디 패치를 착용하는 동안 주의해야 할 사항들은 무엇이 있을까요?',
      '하이카디 패치를 착용하고 커피나 술을 마실 수 있나요?',
      '하이카디 패치를 착용하고 공항 검색대를 통과할 수 있나요?',
      '하이카디 패치를 착용하는 동안 운동을 할 수 있습니까?',
      '하이카디 패치와 함께 AppleWatch를 착용하여 같이 사용할 수 있나요?',
    ],
  },
  {
    '의료진 Q&A': [
      '하이카디 패치의 전원을 켜는 방법과 부착 후 패치가 작동하는지 확인할 수 있는 방법은 무엇입니까?',
      '배터리는 어떻게 교체하나요?',
      '패치에 부착된 전극은 얼마나 부착하고 있어야 하나요?',
    ],
  },
];

const FAQ = () => {
  return (
    <Container>
      <Title>FAQ</Title>
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
        <Button active={true}>전체</Button>
        <Button>제품 기능</Button>
        <Button>이용 방법</Button>
        <Button>이용 시 주의사항</Button>
        <Button>의료진 Q&A</Button>
      </ButtonBox>

      {questionList.map((section, sectionIndex) => (
        <QuestionContainer key={sectionIndex}>
          <QuestionTitle>{Object.keys(section)[0]}</QuestionTitle>
          <QuestionBox>
            {section[Object.keys(section)[0]].map((question, questionIndex) => (
              <Question key={questionIndex}>
                <div>
                  <span>Q.</span> {question}
                </div>
                <img src={arrow} alt="arrow" />
              </Question>
            ))}
          </QuestionBox>
        </QuestionContainer>
      ))}
    </Container>
  );
};

export default FAQ;

const Container = styled.div`
  width: 100%;
  padding: 5rem 15%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
`;

const SearchBox = styled.div`
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 1rem;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
`;

const SearchContentBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchContent = styled.div`
  font-size: 1.8rem;
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
  padding: 1.2rem 1.6rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3rem;
  font-size: 1.2rem;
  position: relative;
`;

const ButtonBox = styled.div`
  display: flex;
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
  }
`;
