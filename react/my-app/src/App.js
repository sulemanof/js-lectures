import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Weather from './routes/Weather';
import NotFound from './components/NotFound';
import Loading from './components/Loading'

const Home = () => {
  const arr = [];
  let i = 0;
  while (i < 100) {
    arr.push(<h1>Hello World</h1>);
    i += 1;
  }

  return arr;
};

const Work = Loadable({
  loader: () => import('./components/Work'),
  loading: Loading,
})

class App extends Component {
  render() {
    return (
        <>
          <nav className='nav navBar'>
            <Link className='nav-item nav-link' to='/'>Home</Link>
            <Link className='nav-item nav-link' to='/weather'>Weather</Link>
            <Link className='nav-item nav-link' to='/work'>Work</Link>
          </nav>
          <Switch className='container'>
            <Route path="/" exact component={Home} />
            <Route path='/weather' render={props => <Weather { ...props } name='You could search world weather here'/>} />
            <Route path='/work' component={Work} />
            <Route component={NotFound} />
          </Switch>
        </>
    );
  }
}

export default App;
