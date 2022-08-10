import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 16px;
  font-size: 22px;
  color: var(--white);
  background-color: var(--secondary);
`;

export const TopBarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  z-index: 1;
`;
