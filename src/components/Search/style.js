import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  font: normal normal 300 18px Nunito Sans;
  color: var(--text);
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: 3px 10px 50px #c4c8d08f;
  padding: 18px;
  padding-left: 60px;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 300;
  &::placeholder {
    color: var(--greyLight);
    opacity: 0.75;
  }
`;
