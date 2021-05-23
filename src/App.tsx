import React from 'react';
import './App.css';
import { Heading } from './components/heading';
import { OperaBridge } from './components/OperaBridge';
import { LanguageIcons } from './components/languages';
function App() {
  return (
    <div id="body-container">
      <Heading/>
      <LanguageIcons/>
      <OperaBridge/>
    </div>

  );
}

export default App;
