import styled from 'styled-components';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitleStyle = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  width: 12rem;
  span {
    color: ${({ theme }) => theme.colors.blue2};
    margin-left: 0.4rem;
  }
`;

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <SubTitleStyle>
      {children}
      <span>*</span>
    </SubTitleStyle>
  );
};

export default SubTitle;
