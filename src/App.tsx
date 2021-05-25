import React from 'react';
import './App.css';
import { Heading } from './components/heading';
import { LanguageIcons } from './components/languages';
import { Animationselector } from './components/AnimationSelector'


function App() {

  return (
    <div id="body-container">
      <Heading/>
      <LanguageIcons/>
      <Animationselector/>

    </div>

  );
}

export default App;
