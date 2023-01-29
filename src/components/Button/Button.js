import * as Styled from './style';

const Button = ({ children, color, outlined, disabled, fullWidth, borderRadius, onClick }) => {
  return (
    <Styled.Wrapper color={color} borderRadius={borderRadius} fullWidth={fullWidth}>
      <Styled.Button color={color} disabled={disabled} outlined={outlined} onClick={onClick}>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Button;
