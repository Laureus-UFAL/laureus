import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  height: fit-content;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ borderRadius }) => borderRadius || '1.5em'};
  ${(props) => {
    const { color } = props;
    if (['primary', 'secondary'].includes(color || '')) {
      return css`
        background-color: var(--${color});
        color: var(--${color});
      `;
    } else if (['black'].includes(color || '')) {
      return css`
        background-color: var(--black-100);
        color: var(--black-100);
      `;
    } else {
      return css`
        background-color: ${color || 'var(--grey-100)'};
        color: ${color || 'var(--grey-100)'};
      `;
    }
  }};
`;

export const Button = styled.button`
  width: 100%;
  padding: 4px 8px;
  position: relative;
  background: inherit;
  border-radius: inherit;
  text-align: center;
  text-decoration: none;
  font-family: Source Sans Pro;
  -webkit-background-clip: text;
  background-clip: text;
  color: inherit;
  /* filter: sepia(5) saturate(100) invert(1) grayscale(1) contrast(9) opacity(70%); */
  cursor: pointer;
  border-width: thin;
  border: ${({ outlined, color }) =>
    outlined ? `0.5px solid ${color || 'var(--grey-100)'} !important` : 'none'};
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
