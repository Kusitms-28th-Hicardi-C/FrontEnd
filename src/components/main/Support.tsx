import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import supports from '../../assets/supports/supports.png';
import SectionDescription from './SectionDescription';

const SupportBlock = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue4};
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;

  img {
    width: 60%;
  }
`;

const Support = () => {
  return (
    <SupportBlock>
      <SectionTitle>국내 최고 의료기관의 든든한 선택</SectionTitle>
      <SectionDescription>이미 많은 의료기관에서 하이카디를 이용하고 있습니다.</SectionDescription>
      <img src={supports} alt="supports" />
    </SupportBlock>
  );
};

export default Support;
