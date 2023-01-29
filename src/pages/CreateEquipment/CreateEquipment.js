import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import PageTitle from 'components/PageTitle';
import EquipmentCard from 'components/Equipments/EquipmentCard';

const CreateEquipment = () => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <PageTitle
        title="Novo Equipamento"
        subtitle="Selecione qual o tipo de equipamento que você deseja cadastrar:"
        canGoBack
      />

      <Styled.Content>
        <EquipmentCard
          title="Inversor"
          backgroundImg="images/inversor.png"
          onClick={() => navigate('/equipamentos/criar/inversor')}
        />
        <EquipmentCard
          title="Módulos"
          backgroundImg="images/modulo.png"
          onClick={() => navigate('/equipamentos/criar/modulo')}
        />
        <EquipmentCard
          title="Estrutura de Fixação"
          backgroundImg="images/estrutura.jpg"
          onClick={() => navigate('/equipamentos/criar/estrutura')}
        />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CreateEquipment;
