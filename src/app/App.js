import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './app.css';
import images from '../data/images';

//components
import Landing from './components/landing';
import Library from './components/library';
import Album from './components/album';

class App extends Component {
  render() {
    return (
      <div className='main-app'>
        <header>          
          <nav className='screen-links'>
              <NavLink className='home-link' to='/'>Home</NavLink>
              <img src={images.logo} alt={'Bloc Jams Logo'}></img>
              <NavLink className='library-link' to='/library'>Library</NavLink>
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
