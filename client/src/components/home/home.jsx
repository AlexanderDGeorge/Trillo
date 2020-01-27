import React from 'react';
import NavBar from '../nav/nav_bar';
import './home.css';
import HomeContent from './home-content';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar/>
        <HomeContent/>
      </div>
    );
  }
}

export default Home;