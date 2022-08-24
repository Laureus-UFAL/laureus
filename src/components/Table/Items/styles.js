import styled from 'styled-components';

export const Body = styled.tbody`
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: auto;
  font-size: 14px;
  color: var(--greyDark);
  text-align: left;

  &::before {
    content: '.';
    line-height: 1em;
    color: transparent;
    display: block;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--lavender);
`;

export const TableColumn = styled.td`
  text-align: ${(props) => props.textAlign || 'left'};
  padding: 16px 2px;
`;
