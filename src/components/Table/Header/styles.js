import styled from 'styled-components';

export const Header = styled.thead`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  color: var(--greyDark);

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 16px;
    background-color: white;
    border-bottom: 1px solid var(--greyDark);
  }
`;

export const TableRow = styled.tr``;

export const TableHead = styled.th`
  text-align: ${(props) => props.textAlign || 'left'};
`;
