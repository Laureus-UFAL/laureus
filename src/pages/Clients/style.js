import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Header = styled.div`
  display: flex;
  gap: 44px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 15% 20% 15%;
  padding: 0 20px;
`;

export const Title = styled.span`
  text-align: ${(props) => props.align || 'left'};
  color: var(--grey-300);
  font: normal normal 600 14px/18px Montserrat;
  text-transform: uppercase;
  opacity: 0.58;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 25%;
  min-width: 220px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.position === 'left' ? '10px' : 'unset')};
  right: ${(props) => (props.position === 'right' ? '30px' : 'unset')};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  appearance: none;
  height: 55px;
  width: 100%;
  padding-left: 30px;
  background-color: var(--white);
  box-shadow: 3px 10px 50px var(--box-shadow-light);
  border-radius: 20px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  color: var(--greyLight);
  border: none;
`;

export const SelectOption = styled.option`
  text-align: left;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: 300;
  color: var(--greyLight);
  opacity: 0.75;
  margin: 8px;
`;

export const NewClientButton = styled.div`
  font-size: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  span {
    font-weight: 200;
  }
`;
