import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { ListContainer } from './components/ListContainer';

const StyledTittle = styled.h1`
  font-size: 5rem;
  position: fixed;
  top: 5rem;
`;

function App() {
  return (
    <main>
      <GlobalStyles />
      <StyledTittle>Land list view</StyledTittle>
      <ListContainer />
    </main>
  );
}

export default App;
