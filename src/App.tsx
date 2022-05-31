import React from 'react';
import { Container } from "@mui/material";
import Characters from './components/Characters';
import Movies from './components/Movies';
import LastMovie from './components/LastMovie';

function App() {
  return (
    <Container>
      <Characters />
      <Movies />
      <LastMovie />
    </Container>
  );
}

export default App;
