import { MdSearch } from 'react-icons/md';

import * as Styled from './style';

const Search = ({ placeholder, onChange }) => {
  return (
    <Styled.Wrapper>
      <Styled.Icon>
        <MdSearch />
      </Styled.Icon>
      <Styled.SearchInput placeholder={placeholder} onChange={onChange} />
    </Styled.Wrapper>
  );
};

export default Search;
