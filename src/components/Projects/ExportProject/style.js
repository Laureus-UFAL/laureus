import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 16px;
`;

export const OpenFullScreen = styled.div`
  position: absolute;
  right: 0;
  opacity: 0.22;
  font-size: 30px;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Source Sans Pro';
  font-size: 29px;
  line-height: 0.95em;
  color: var(--black-100);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleIcon = styled.div`
  font-size: 1.4em;
  margin-left: -20px;
  color: var(--black-100);
`;

export const StrongText = styled.span`
  font-weight: 900;
  font-family: 'Source Sans Pro';
`;

export const LightText = styled.span`
  font-weight: 200;
  font-family: 'Source Sans Pro';
`;

export const Inputs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .MuiFormControl-root > .MuiInputBase-root {
    border-radius: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const VisualizeButton = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const ExportButton = styled.div`
  opacity: 0.46;
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 3.2px;
`;
