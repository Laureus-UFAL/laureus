import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s ease-in-out;
  backdrop-filter: blur(2px);

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        pointer-events: unset;
      `;
    } else {
      return css`
        opacity: 0;
        pointer-events: none;
      `;
    }
  }}
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  width: 300px;
  background-color: var(--sidebarBackground);
  transition: all 0.4s;
  -webkit-box-shadow: inset -20px 0px 50px #0000000f, 0px 3px 50px #00000029;
  -moz-box-shadow: inset -20px 0px 50px #0000000f, 0px 3px 50px #00000029;
  box-shadow: inset -20px 0px 50px #0000000f, 0px 3px 50px #00000029;

  ${(props) => {
    if (props.isOpen) {
      return css`
        left: 0;
      `;
    } else {
      return css`
        left: -300px;
      `;
    }
  }}
`;

export const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  padding: 50px 0;
  width: 100px;
`;
