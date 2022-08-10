import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import SidebarButton from './SidebarButton';

import * as Styled from './styles';

function Sidebar({ options }) {
  const localMenuExpanded = window.localStorage.getItem('menuExpanded') ?? 'true';
  const [menuExpanded, setMenuExpanded] = useState(localMenuExpanded === 'true');

  function toggleSidebar() {
    setMenuExpanded(!menuExpanded);
    window.localStorage.setItem('menuExpanded', !menuExpanded);
  }

  return (
    <Styled.Wrapper expanded={menuExpanded}>
      <Styled.Logo expanded={menuExpanded} src="images/logo-preta@2x.png" />

      {options.map((option, index) => (
        <SidebarButton key={index} to={option.to} Icon={option.icon} expanded={menuExpanded}>
          {option.label}
        </SidebarButton>
      ))}

      <Styled.Button onClick={toggleSidebar}>
        {menuExpanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </Styled.Button>
    </Styled.Wrapper>
  );
}

export default Sidebar;
