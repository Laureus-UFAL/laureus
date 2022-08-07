import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'contexts/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App" />
    </ThemeProvider>
  );
}

export default App;
