import React from 'react';

import NavBar from '../nav/nav_bar';
import HomeContent from './home-content';

import './home.css';

function Home() {
    return (
      <div className="home">
        <NavBar/>
        <HomeContent/>
      </div>
    );
}

export default Home;