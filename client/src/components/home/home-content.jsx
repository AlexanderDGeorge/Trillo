import React from 'react';
import './home.css';

function HomeContent() {
  return (
    <div className="home-content">
      <h1>Trillo lets you work more collaboratively and get more done.</h1>
      <h2>
        Trillo's boards, lists, and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way 
      </h2>
      <span role="img">
        ☑️
      </span>
      <form className="home-form">
        <input type="text" placeholder="Email" />
        <button>Sign Up - It's Free!</button>
      </form>
    </div>
  );
}

export default HomeContent