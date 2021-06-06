import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Heading } from './components/heading';
import { Home } from './pages/home'
import { Projects } from './pages/projects/projects'
import { About } from './pages/about/about';
import { Blogs } from './pages/blog/blog';
import { Markdown } from './pages/markdown/markdown';

function App() {

  return (
    <Router>
      <Heading/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about" component={ About }/>
        <Route exact path="/blogs" component={ Blogs }/>
        <Route exact path="/blogs/testingmarkdown" component={ Markdown }/>
      </Switch>
    </Router>

  );
}

export default App;
