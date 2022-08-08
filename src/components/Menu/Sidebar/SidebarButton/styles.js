import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  width: 100%;
  position: relative;

  &.active::before {
    content: '';
    position: absolute;
    width: 105%;
    left: 0;
    z-index: -1;
    background-color: var(--primary);
    transition: background 0.2s ease-in-out;

    ${(props) => {
      if (props.expanded) {
        return css`
          top: 0;
          height: 100%;
          border-radius: 50px;
          margin-left: 20px;
        `;
      } else {
        return css`
          top: 10px;
          height: 70%;
          border-radius: 25px;
          margin-left: 10px;
        `;
      }
    }}
  }

  &:hover > button {
    cursor: pointer;
    color: var(--secondary);
  }
`;

export const Button = styled.button`
  border: none;
  display: flex;
  padding: 20px 24px;
  font-size: 20px;
  align-content: center;
  gap: 8px;
  z-index: 1;
  color: var(--text);
  background-color: transparent;
  margin-left: ${(props) => (props.expanded ? '20px' : '0')};
`;

export const Icon = styled.div`
  display: flex;
  align-self: center;
`;

export const Content = styled.div`
  font-family: Trebuchet MS;
  font-weight: bold;
`;
