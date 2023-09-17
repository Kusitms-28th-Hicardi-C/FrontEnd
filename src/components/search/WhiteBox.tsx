import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TextAnimation } from '../../styles/animation';

interface WhiteBoxProps {
  children: React.ReactNode;
}

const SectionBlock = styled(motion.div)`
  padding: 2rem;
`;

const WhiteBoxBlock = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WhiteBox = ({ children }: WhiteBoxProps) => {
  return (
    <SectionBlock initial="hidden" animate="visible" variants={TextAnimation}>
      <WhiteBoxBlock>{children}</WhiteBoxBlock>
    </SectionBlock>
  );
};

export default WhiteBox;
