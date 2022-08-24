import { forwardRef } from 'react';
import * as Styled from './styles';

import OptionButton from './OptionButton';

const SidebarMobile = forwardRef(({ options, isOpen, setIsOpen }, ref) => {
  return (
    <Styled.Wrapper isOpen={isOpen}>
      <Styled.Content ref={ref} isOpen={isOpen}>
        <Styled.Logo src="images/logo-preta@2x.png" />

        {options.map((option, index) => (
          <OptionButton
            key={index}
            to={option.to}
            Icon={option.icon}
            onClick={() => setIsOpen(!isOpen)}
          >
            {option.label}
          </OptionButton>
        ))}
      </Styled.Content>
    </Styled.Wrapper>
  );
});
SidebarMobile.displayName = 'SidebarMobile';

export default SidebarMobile;
