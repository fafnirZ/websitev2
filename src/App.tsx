import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Heading } from './components/heading';
import { Home } from './pages/home'
import { Projects } from './pages/projects/projects'
import { About } from './pages/about/about';
import { Blogs } from './pages/blog/blog';

function App() {

  return (
    <Router>
      <Heading/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about" component={ About }/>
      </Switch>
    </Router>

  );
}

export default App;
