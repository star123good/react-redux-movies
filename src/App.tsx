import React from 'react';
import { Container } from "@mui/material";
import Characters from './components/characters';
import Movies from './components/movies';

function App() {
  return (
    <Container>
      <Characters />
      <Movies />
    </Container>
  );
}

export default App;
