import { CgMenuLeft } from 'react-icons/cg';

import * as Styled from './styles';

function TopBarMobile({ openSidebar }) {
  return (
    <Styled.Wrapper>
      <Styled.ButtonWrapper onClick={openSidebar}>
        <CgMenuLeft />
      </Styled.ButtonWrapper>
      <Styled.TopBarTitle>Laureus</Styled.TopBarTitle>
    </Styled.Wrapper>
  );
}

export default TopBarMobile;
