import { IoMdPerson, IoIosInformationCircleOutline } from 'react-icons/io';
import { MdLocationOn, MdEdit } from 'react-icons/md';

import Card from 'components/Card';
import Button from 'components/Button';

import * as Styled from './style';

const ClientCard = ({ client }) => {
  return (
    <Styled.Wrapper>
      <Card>
        <Styled.CardWrapper>
          <Styled.NameWrapper>
            <IoMdPerson size="23" color={client.tag} />
            <Styled.Title margin="0 20px">{client.name}</Styled.Title>
            <Styled.Subtitle fontSize="16px">{client.cpf}</Styled.Subtitle>
          </Styled.NameWrapper>
          <Styled.AddressWrapper color={client.tag}>
            <Styled.Title>{client.address.street}</Styled.Title>
            <span>
              <Styled.Legend>{client.address.district},&nbsp;</Styled.Legend>
              <Styled.Legend>{client.address.number}</Styled.Legend>
              <Styled.SpanSeparator color={client.tag} />
              <Styled.Legend>{client.address.cep}</Styled.Legend>
            </span>
            <Styled.Aligned>
              <IoIosInformationCircleOutline color="LightGray" />
              <Styled.Legend>{client.address.reference}</Styled.Legend>
            </Styled.Aligned>
          </Styled.AddressWrapper>
          <Styled.CityWrapper>
            <MdLocationOn size="23" color={client.tag} />
            <Styled.Title>{client.address.city}</Styled.Title>
          </Styled.CityWrapper>
          <Styled.ContractWrapper>
            <Styled.Subtitle fontSize="18px">{client.contract}</Styled.Subtitle>
          </Styled.ContractWrapper>
          <Styled.ActionsWrapper>
            <Button color={client.tag}>
              <Styled.ButtonContent>
                <MdEdit size={16} color="black" />
                <Styled.ButtonText>Editar</Styled.ButtonText>
              </Styled.ButtonContent>
            </Button>
          </Styled.ActionsWrapper>
        </Styled.CardWrapper>
      </Card>
    </Styled.Wrapper>
  );
};

export default ClientCard;
