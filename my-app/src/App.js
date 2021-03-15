import {  ThemeProvider} from '@ui5/webcomponents-react';
import React from 'react';
import { MyApp } from "./MyApp";

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

export default App;
