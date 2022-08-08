import * as Styled from './styles';

function SidebarButton({ Icon, children, to, expanded }) {
  return (
    <Styled.Link to={to} expanded={expanded}>
      <Styled.Button expanded={expanded}>
        <Styled.Icon>{Icon}</Styled.Icon>
        {expanded && <Styled.Content>{children}</Styled.Content>}
      </Styled.Button>
    </Styled.Link>
  );
}

export default SidebarButton;
