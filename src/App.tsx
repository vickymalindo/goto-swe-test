import { Global } from '@emotion/react';
import './App.css';
import GlobalStyle from './styles/Global';
import { LeftSide } from './views/LeftSide';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <LeftSide />
    </>
  );
}

export default App;
