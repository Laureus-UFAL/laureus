import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: bold;
  color: var(--text);
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: light;
  color: var(--greyDark);
`;

export const BackButton = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
  color: var(--greyDark);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
