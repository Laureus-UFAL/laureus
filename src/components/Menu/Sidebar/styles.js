import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 0 30px 30px 0;
  box-shadow: inset -20px 0px 50px #0000000f, 0px 3px 50px #00000029;
  background-color: var(--sidebarBackground);

  max-width: 250px;
`;

export const Logo = styled.img`
  width: 108px;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 55px;

  ${(props) => {
    if (!props.expanded) {
      return css`
        width: 60px;
        margin-top: 20px;
        margin-bottom: 25px;
        padding: 0 10px;
      `;
    }
  }}
`;

export const Button = styled.button`
  border: none;
  padding: 20px 24px;
  font-size: 20px;
  align-content: center;
  color: var(--text);
  background-color: transparent;

  align-self: flex-end;
  margin-top: auto;

  cursor: pointer;

  &:hover {
    @keyframes shake-horizontal {
      0%,
      100% {
        transform: translateX(0);
      }
      40%,
      80% {
        transform: translateX(-5px);
      }
      20%,
      60% {
        transform: translateX(5px);
      }
    }

    -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
`;
