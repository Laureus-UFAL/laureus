import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import * as Styled from './styles';

const PageTitle = ({ title, subtitle, canGoBack }) => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      {canGoBack && (
        <Styled.BackButton onClick={() => navigate(-1)}>
          <FiArrowLeft />
          Voltar
        </Styled.BackButton>
      )}
      <Styled.Title>{title}</Styled.Title>
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
    </Styled.Wrapper>
  );
};

export default PageTitle;
