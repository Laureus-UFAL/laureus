import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 4px 6px;
  height: 50px;
  background-color: var(--primary);
  border-radius: 600px;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  max-width: 15ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Type = styled.div`
  font-size: 12px;
  opacity: 0.55;
`;

export const DropDownIcon = styled.div`
  font-size: 18px;
  margin-right: 4px;
  margin-top: 6px;
`;
