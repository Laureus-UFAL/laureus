import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import Menu from 'components/Menu';
import TopBar from 'components/Menu/TopBar';

import * as Styled from './styles';

function BaseLayout() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 769px)'
  });

  return (
    <Styled.Wrapper isDesktopOrLaptop={isDesktopOrLaptop}>
      <Menu />
      <Styled.Container isDesktopOrLaptop={isDesktopOrLaptop}>
        {isDesktopOrLaptop && <TopBar />}
        <Outlet />
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default BaseLayout;
