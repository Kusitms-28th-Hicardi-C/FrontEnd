import styled from 'styled-components';

const SmallBarBlock = styled.section`
  background-color: ${({ theme }) => theme.colors.blue2};
  padding: 1.5rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const SmallBar = () => {
  return (
    <SmallBarBlock>
      <span>안전인증 받은 하이카디, 아직도 안 써 보셨다구요?</span>
    </SmallBarBlock>
  );
};

export default SmallBar;
