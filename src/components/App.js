import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';

//components
import Landing from './landing';
import Library from './library';
import Album from './album';

class App extends Component {
  render() {
    return (
      <div className='mainApp'>
        <header>
          <h1>Welcome to Bloc Jams</h1>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/library'>Library</NavLink>
            <NavLink to='/album'>Album</NavLink>
          </nav>
        </header>

        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path ='/album' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
