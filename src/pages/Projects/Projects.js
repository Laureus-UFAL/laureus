import { FaFileAlt } from 'react-icons/fa';

import PageTitle from 'components/PageTitle';
import Table from 'components/Table';
import Card from 'components/Card';

function Projects() {
  const headers = [
    {
      text: 'Nome do cliente',
      sortable: true,
      value: 'name'
    },
    { text: 'Cidade', sortable: true, value: 'city' },
    { text: 'CPF', sortable: true, value: 'cpf' },
    { text: 'Conta contrato', sortable: true, value: 'contract' },
    { text: 'Status do projeto', sortable: true, value: 'status', align: 'center' },
    { text: 'Data de criação', value: 'date', filter: true },
    { text: 'Ação', value: 'action', align: 'center' }
  ];

  const items = [
    {
      name: 'Lorem ipsum',
      city: 'Recife',
      cpf: '000.000.000-00',
      contract: '000.000.000-00',
      status: (
        <div color="white" background="secondary">
          Aprovado
        </div>
      ),
      date: '17/01/2022',
      action: (
        <button color="white" outlined>
          Abrir projeto
        </button>
      )
    },
    {
      name: 'Lorem ipsum',
      city: 'Recife',
      cpf: '000.000.000-00',
      contract: '000.000.000-00',
      status: (
        <div color="black" background="#e5e5e5">
          Pendente
        </div>
      ),
      date: '17/01/2022',
      action: (
        <button color="white" outlined>
          Abrir projeto
        </button>
      )
    },
    {
      name: 'Lorem ipsum',
      city: 'Recife',
      cpf: '000.000.000-00',
      contract: '000.000.000-00',
      status: (
        <div color="gray" background="primary">
          Em análise
        </div>
      ),
      date: '17/01/2022',
      action: (
        <button color="white" outlined>
          Abrir projeto
        </button>
      )
    }
  ];

  return (
    <>
      <PageTitle title="Projetos" subtitle="Gerencie seus projetos" canGoBack />

      <Card>
        <Table title="Lista de projetos" icon={<FaFileAlt />} headers={headers} items={items} />
      </Card>
    </>
  );
}

export default Projects;
