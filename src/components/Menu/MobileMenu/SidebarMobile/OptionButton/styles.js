import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  width: 100%;
  position: relative;

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
  word-break: break-word;
`;

export const Icon = styled.div`
  display: flex;
  align-self: center;
`;

export const Content = styled.div`
  font-family: Trebuchet MS;
  font-weight: bold;
`;
