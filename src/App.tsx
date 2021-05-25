import React from 'react';
import './App.css';
import { Heading } from './components/heading';
import { Animationselector } from './components/AnimationSelector'


function App() {

  return (
    <div id="body-container">
      <Heading/>
      <Animationselector/>
    </div>

  );
}

export default App;
