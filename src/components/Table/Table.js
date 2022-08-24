import Header from './Header';
import Items from './Items';

import * as Styled from './styles';

const Table = ({ title, icon, headers, items }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <Styled.Icon>{icon}</Styled.Icon>
        {title}
      </Styled.Title>

      <Styled.TableWrapper>
        <Styled.Table>
          <Header items={headers} />
          <Items headers={headers} items={items} />
        </Styled.Table>
      </Styled.TableWrapper>
    </Styled.Wrapper>
  );
};

export default Table;
