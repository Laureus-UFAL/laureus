import Notification from './Notification';
import Profile from './Profile';

import * as Styled from './styles';

function TopBar() {
  return (
    <Styled.Wrapper>
      <Notification />
      <Profile />
    </Styled.Wrapper>
  );
}

export default TopBar;
