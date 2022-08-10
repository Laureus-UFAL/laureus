import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isDesktopOrLaptop ? 'row' : 'column')};
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
`;

export const Container = styled.div`
  flex: 1;
  padding: 16px;
  margin-left: ${(props) => (props.isDesktopOrLaptop ? '28px' : '0')};
`;
