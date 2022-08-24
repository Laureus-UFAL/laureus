import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import TopBarMobile from './TopBarMobile';
import SidebarMobile from './SidebarMobile';

import * as Styled from './styles';

function MobileMenu({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useOnclickOutside(() => {
    setIsOpen(false);
  });

  return (
    <Styled.MenuMobile>
      <TopBarMobile openSidebar={() => setIsOpen(true)} />
      <SidebarMobile options={options} isOpen={isOpen} setIsOpen={setIsOpen} ref={sidebarRef} />
    </Styled.MenuMobile>
  );
}

export default MobileMenu;
