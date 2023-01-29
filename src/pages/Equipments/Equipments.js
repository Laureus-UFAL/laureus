import { FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import PageTitle from 'components/PageTitle';
import Table from 'components/Table';
import Card from 'components/Card';
import Search from 'components/Search';

import * as Styled from './style';
import Button from 'components/Button';
import { FiFilePlus } from 'react-icons/fi';

function Equipments() {
  const navigate = useNavigate();

  const headers = [
    {
      text: 'Nome do equipamento',
      sortable: true,
      value: 'name'
    },
    { text: 'Tipo', sortable: true, value: 'type', align: 'center' },
    { text: 'Modelo', sortable: true, value: 'model', align: 'center' },
    { text: 'Dimensões', sortable: true, value: 'dimensions', align: 'center' },
    { text: 'Tensão de entrada máxima', sortable: true, value: 'maximumTension', align: 'center' },
    { text: 'Ação', value: 'action', align: 'center' }
  ];

  const items = [
    {
      name: 'Lorem ipsum',
      model: 'Model X',
      type: 'Inversor',
      dimensions: 'a x b x c',
      maximumTension: 'Lorem ip',
      action: (
        <button color="white" outlined>
          Abrir equipamento
        </button>
      )
    },
    {
      name: 'Lorem ipsum',
      model: 'Model Y',
      type: 'Módulo',
      dimensions: 'a x b x c',
      maximumTension: 'Lorem ip',
      action: (
        <button color="white" outlined>
          Abrir equipamento
        </button>
      )
    },
    {
      name: 'Lorem ipsum',
      model: 'Model Z',
      type: 'Estrutura de fixação',
      dimensions: 'a x b x c',
      maximumTension: 'Lorem ip',
      action: (
        <button color="white" outlined>
          Abrir equipamento
        </button>
      )
    }
  ];

  return (
    <>
      <PageTitle
        title="Equipamentos"
        subtitle="Visão geral de todos os equipamentos cadastrados"
        canGoBack
      />

      <Styled.Content>
        <Styled.ContentHeader>
          <Search
            placeholder="Pesquise equipamentos pelo nome ou modelo"
            onChange={(e) => console.log(e.target.value)}
          />
          <Button
            borderRadius="20px"
            outlined
            color="black"
            onClick={() => navigate('/equipamentos/criar')}
          >
            <Styled.NewEquipmentButton>
              <FiFilePlus />
              <strong>Novo</strong>
              <span>&nbsp;equipamento</span>
            </Styled.NewEquipmentButton>
          </Button>
        </Styled.ContentHeader>

        <Card>
          <Table
            title="Lista de equipamentos"
            icon={<FaFileAlt />}
            headers={headers}
            items={items}
          />
        </Card>
      </Styled.Content>
    </>
  );
}

export default Equipments;
