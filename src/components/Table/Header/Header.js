import * as Styled from './styles';

const Header = ({ items }) => {
  return (
    <Styled.Header>
      <Styled.TableRow>
        {items.map((item, index) => (
          <Styled.TableHead key={index} textAlign={item.align}>
            {item.text}
          </Styled.TableHead>
        ))}
      </Styled.TableRow>
    </Styled.Header>
  );
};

export default Header;
