import { useMediaQuery } from 'react-responsive';

import { MdDashboard, MdPeople } from 'react-icons/md';
import { FaFolderOpen, FaTools } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 769px)'
  });

  const menuOptions = [
    {
      label: 'Dashboard',
      to: '/',
      icon: <MdDashboard />
    },
    {
      label: 'Projetos',
      to: '/projetos',
      icon: <FaFolderOpen />
    },
    {
      label: 'Clientes',
      to: '/clientes',
      icon: <MdPeople />
    },
    {
      label: 'Equipamentos',
      to: '/equipamentos',
      icon: <FaTools />
    }
  ];

  return isDesktopOrLaptop ? (
    <Sidebar options={menuOptions} />
  ) : (
    <MobileMenu options={menuOptions} />
  );
}

export default Menu;
