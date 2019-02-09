import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Weather from './routes/Weather';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import Users from './components/Users';

const Home = () => <h1>Hello World</h1>;

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
            <Link className='nav-item nav-link' to='/users'>Users</Link>
          </nav>
          <Switch className='container'>
            <Route path="/" exact component={Home} />
            <Route path='/weather' render={props => <Weather { ...props } name='You could search world weather here'/>} />
            <Route path='/work' component={Work} />
            <Route path='/users' component={Users} />
            <Route component={NotFound} />
          </Switch>
        </>
    );
  }
}

export default App;