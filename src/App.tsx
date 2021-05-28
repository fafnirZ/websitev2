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
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={ About }/>
        <Route path="/blogs" component={ Blogs }/>
      </Switch>
    </Router>

  );
}

export default App;
