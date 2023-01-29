import { useNavigate } from 'react-router-dom';

import { MdLocationOn } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FiFilePlus } from 'react-icons/fi';

import * as Styled from './style';

import Search from 'components/Search';
import PageTitle from 'components/PageTitle';
import Button from 'components/Button';
import ClientCard from 'components/Clients/ClientCard';

const Clients = () => {
  const navigate = useNavigate();

  const clients = [
    {
      name: 'Pessoa X',
      cpf: '123.123.123-12',
      contract: '12312312312',
      tag: '#a6d9f7',
      address: {
        street: 'Rua Engenherio',
        number: '123',
        district: 'Bairro X',
        cep: '57000-000',
        reference: 'Ao lado da rua X',
        city: 'Maceió',
        state: 'AL'
      }
    },
    {
      name: 'Pessoa y',
      cpf: '456.456.456-12',
      contract: '45645645645',
      tag: '#f6c9b0',
      address: {
        street: 'Rua das ruas A',
        number: '456',
        district: 'Bairro A',
        cep: '58000-000',
        reference: 'Ao lado da rua A',
        city: 'Recife',
        state: 'PE'
      }
    }
  ];

  const cidades = ['Maceió', 'Recife'];

  return (
    <Styled.Wrapper>
      <PageTitle
        title="Clientes"
        subtitle="Visão geral de todos os clientes cadastrados"
        canGoBack
      />

      <Styled.Header>
        <Search
          placeholder="Pesquise clientes pelo nome ou cpf"
          onChange={(e) => console.log(e.target.value)}
        />

        <Styled.SelectWrapper>
          <Styled.Icon position="left">
            <MdLocationOn />
          </Styled.Icon>

          <Styled.Select defaultValue="all">
            <Styled.SelectOption value="all">Todas as Cidades</Styled.SelectOption>
            {cidades.map((cidade, index) => (
              <Styled.SelectOption key={index} value={cidade}>
                {cidade}
              </Styled.SelectOption>
            ))}
          </Styled.Select>

          <Styled.Icon position="right">
            <IoIosArrowDown color="LightGrey" />
          </Styled.Icon>
        </Styled.SelectWrapper>

        <Button
          borderRadius="20px"
          outlined
          color="black"
          onClick={() => navigate('/clientes/criar')}
        >
          <Styled.NewClientButton>
            <FiFilePlus />
            <strong>Novo</strong>
            <span>&nbsp;cliente</span>
          </Styled.NewClientButton>
        </Button>
      </Styled.Header>

      <Styled.TableHeader>
        <Styled.Title>NOME DO CLIENTE</Styled.Title>
        <Styled.Title>ENDEREÇO</Styled.Title>
        <Styled.Title>CIDADE</Styled.Title>
        <Styled.Title align="center">CONTA-CONTRATO</Styled.Title>
        <Styled.Title align="center">AÇÃO</Styled.Title>
      </Styled.TableHeader>

      {clients.map((client, index) => (
        <ClientCard key={index} client={client} />
      ))}
    </Styled.Wrapper>
  );
};

export default Clients;
