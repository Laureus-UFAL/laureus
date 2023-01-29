import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 15% 20% 15%;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.75rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: ${(props) => props.color || 'grey'};
    width: 0.5rem;
    height: 100%;
    border-radius: 10px;
    left: -0.75rem;
  }
`;

export const CityWrapper = styled.div`
  display: flex;
`;

export const Aligned = styled.span`
  display: flex;
  align-items: center;
`;

export const ContractWrapper = styled.div``;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: 600;

  color: var(--grey-200);

  margin: ${(props) => props.margin || 'none'};

  text-align: left;
`;

export const Subtitle = styled.div`
  font-family: Montserrat;
  font-size: ${(props) => props.fontSize || '1rem'};

  color: var(--grey-200);
  opacity: 0.48;
  letter-spacing: 0.34px;

  align-self: center;
  text-align: center;
`;

export const Legend = styled.span`
  font-family: Source Sans Pro;
  font-size: ${(props) => props.fontSize || '17px'};

  font-weight: 300;

  color: var(--greyLight);
  letter-spacing: 0.3px;

  align-self: center;
`;

export const SpanSeparator = styled.span`
  position: relative;
  margin: 0 0.5rem;

  :after {
    content: '';
    height: 100%;
    width: 2px;
    position: absolute;
    top: 0%;
    background-color: ${(props) => props.color || 'grey'};
    border-radius: 10px;
  }
`;

export const ButtonContent = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonText = styled.span`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.32px;
  color: black;
`;
