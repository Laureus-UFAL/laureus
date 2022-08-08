import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'contexts/theme';

import { publicRoutes, privateRoutes } from 'routes';
import GlobalStyles from 'GlobalStyles';
import ColorStyles from 'ColorStyles';

function App() {
  const publicPages = useRoutes(publicRoutes);
  const privatePages = useRoutes(privateRoutes);

  const isAuth = true;

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Suspense fallback={null}>{isAuth ? privatePages : publicPages}</Suspense>
      </div>
      <GlobalStyles />
      <ColorStyles />
    </ThemeProvider>
  );
}

export default App;
