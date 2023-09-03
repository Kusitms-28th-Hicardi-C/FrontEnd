import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  );
}

export default App;
