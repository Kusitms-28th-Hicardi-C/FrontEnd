import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import intro1 from '../../assets/intro/intro1.png';
import Button from '../common/Button/Button';

const IntroBlock = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Heading = styled.div`
  h2 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }
`;

const Categories = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  margin-top: 3rem;

  img {
    width: 400px;
  }
`;

const ContentText = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;

    b {
      font-weight: 700;
    }
  }
`;

const Intro = () => {
  return (
    <IntroBlock>
      <Heading>
        <SectionTitle>
          간단하게, 명료하게.
          <br />
          확실한 침상감시 패치 하이카디
        </SectionTitle>
      </Heading>
      <Categories>
        <Button active={true}>원격 모니터링</Button>
        <Button>높은 정확도</Button>
        <Button>요양급여 적용</Button>
        <Button>넓은 사용범위</Button>
        <Button>병원 부담 감소</Button>
      </Categories>
      <Content>
        <ContentText>
          <h3>원격 모니터링</h3>
          <p>
            심박수부터 호흡, 수면까지
            <br />
            <b>환자 데이터 실시간 연속 측정</b>
          </p>
        </ContentText>
        <img src={intro1} alt="원격 모니터링" />
      </Content>
    </IntroBlock>
  );
};

export default Intro;
