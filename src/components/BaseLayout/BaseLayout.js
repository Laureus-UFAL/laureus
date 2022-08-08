import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      Tela de BaseLayout
      <Outlet />
    </div>
  );
}

export default BaseLayout;
