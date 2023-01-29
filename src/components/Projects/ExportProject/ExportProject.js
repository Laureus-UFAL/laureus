import { MdFileDownload, MdOpenInFull, MdCalendarToday } from 'react-icons/md';
import { FaFilter } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';

import Button from 'components/Button';

import {
  TextField,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';

import * as Styled from './style';

const ExportProject = ({ exportFunction }) => {
  const inputStyle = {
    style: {
      color: '#242424',
      opacity: 0.56,
      fontSize: '20px',
      fontWeight: 'bold'
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.OpenFullScreen>
        <MdOpenInFull />
      </Styled.OpenFullScreen>

      <Styled.Title>
        <Styled.TitleIcon>
          <MdFileDownload />
        </Styled.TitleIcon>

        <Styled.Column>
          <Styled.StrongText>Exportar</Styled.StrongText>
          <Styled.LightText>Relatório</Styled.LightText>
        </Styled.Column>
      </Styled.Title>

      <Styled.Inputs>
        <TextField
          fullWidth
          select
          label="Filtro"
          placeholder="Escolha os filtros"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaFilter />
              </InputAdornment>
            )
          }}
          InputLabelProps={inputStyle}
          defaultValue=""
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
        </TextField>

        <FormControl fullWidth>
          <InputLabel id="select-filters">Filtros aplicados</InputLabel>
          <Select
            multiple
            labelId="select-filters"
            id="document-filters"
            label="Filtros aplicados"
            value={[]}
          >
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="CSV">CSV</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Datas"
          placeholder="dd/mm/aaaa"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdCalendarToday />
              </InputAdornment>
            )
          }}
          InputLabelProps={inputStyle}
        />

        <TextField
          fullWidth
          label="Título do documento"
          placeholder="Escolha um título"
          InputLabelProps={inputStyle}
        />

        <TextField
          fullWidth
          select
          label="Tipo do documento"
          InputLabelProps={inputStyle}
          value="pdf"
        >
          <MenuItem value="pdf">PDF</MenuItem>
        </TextField>

        <Styled.Actions>
          <Button color="#E8E8E8" outlined>
            <Styled.VisualizeButton>
              <IoMdEye />
              Visualizar
            </Styled.VisualizeButton>
          </Button>
          <Button color="white" outlined onClick={() => exportFunction}>
            <Styled.ExportButton>Exportar</Styled.ExportButton>
          </Button>
        </Styled.Actions>
      </Styled.Inputs>
    </Styled.Wrapper>
  );
};

export default ExportProject;
