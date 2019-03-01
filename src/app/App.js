import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './app.css';
import images from '../data/logo';

//components
import Landing from './components/landing';
import Library from './components/library';
import Album from './components/album';

class App extends Component {
  render() {
    return (
      <div className='mainApp'>
        <header>          
          <nav className='screenLinks'>
              <NavLink className='homeLink' to='/'>Home</NavLink>
              <img src={images.logo} alt={'Bloc Jams Logo'}></img>
              <NavLink className='libraryLink' to='/library'>Library</NavLink>
          </nav>
        </header>

        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path ='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
