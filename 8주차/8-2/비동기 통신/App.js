import React from 'react';
import "./App.css";
import BitcoinApp from "./BitcoinApp/BitcoinApp";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <BitcoinApp />
    </Container>
  );
}

export default App;
