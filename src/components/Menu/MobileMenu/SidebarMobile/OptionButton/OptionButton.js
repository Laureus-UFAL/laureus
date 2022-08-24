import * as Styled from './styles';

function OptionButton({ Icon, children, to, onClick }) {
  return (
    <Styled.Link to={to} onClick={onClick}>
      <Styled.Button>
        <Styled.Icon>{Icon}</Styled.Icon>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Button>
    </Styled.Link>
  );
}

export default OptionButton;
