import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  color: var(--text);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  gap: 14px;
`;

export const Icon = styled.span`
  display: flex;
  align-self: center;
`;

export const TableWrapper = styled.div`
  height: calc(100% - 50px);
  margin-top: 27px;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;
