import * as React from 'react';
import {Container} from 'react-bootstrap';
import TitleText from "./Components/TitleText";
import ExpenseTracker from "./Components/ExpenseTracker";

function App() {
  return (
    <Container>
      <TitleText />
      <ExpenseTracker/>
    </Container>
  );
}

export default App;