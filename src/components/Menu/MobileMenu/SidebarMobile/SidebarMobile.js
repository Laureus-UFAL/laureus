import { forwardRef } from 'react';
import * as Styled from './styles';

const SidebarMobile = forwardRef(({ isOpen, setIsOpen }, ref) => {
  return (
    <Styled.Wrapper ref={ref}>
      <div>{isOpen ? 'True' : 'False'}</div>
      <button onClick={() => setIsOpen(!isOpen)}>Mudar</button>
    </Styled.Wrapper>
  );
});
SidebarMobile.displayName = 'SidebarMobile';

export default SidebarMobile;
