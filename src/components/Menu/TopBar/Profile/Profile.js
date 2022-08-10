import { FaUserAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import * as Styled from './styles';

function Profile() {
  return (
    <Styled.Wrapper>
      <Styled.ProfileIcon>
        <FaUserAlt />
      </Styled.ProfileIcon>

      <Styled.UserInfo>
        <Styled.Name>John Doe</Styled.Name>
        <Styled.Type>Administrador</Styled.Type>
      </Styled.UserInfo>

      <Styled.DropDownIcon>
        <IoIosArrowDown />
      </Styled.DropDownIcon>
    </Styled.Wrapper>
  );
}

export default Profile;
