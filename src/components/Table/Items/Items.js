import * as Styled from './styles';

const Items = ({ items, headers }) => {
  return (
    <Styled.Body>
      {items.map((item, index) => (
        <Styled.TableRow key={index}>
          {headers.map((header, index) => (
            <Styled.TableColumn key={index} textAlign={header.align}>
              {item[header.value]}
            </Styled.TableColumn>
          ))}
        </Styled.TableRow>
      ))}
    </Styled.Body>
  );
};

export default Items;
