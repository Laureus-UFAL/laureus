import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 48px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 32px;
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 32px;
`;

export const NewProjectButton = styled.div`
  font-size: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 200;
  }
`;

export const ApprovedProjects = styled.div`
  display: flex;
  flex-direction: column;
  font: normal normal normal 21px PT Sans;
  color: var(--black-100);
  text-align: center;
`;

export const ApprovedProjectsQuantity = styled.span`
  color: var(--secondary);
  font-size: 70px;
`;

export const ApprovedProjectsColored = styled.span`
  color: var(--secondary);
  font-size: 17px;
  font-weight: 200;
`;

export const Chart = styled.div``;
