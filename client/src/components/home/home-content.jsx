import React from 'react';
import HomeForm from './home-form';

function HomeContent() {
  return (
    <div className="home-content">
      <h1>Trillo lets you work more collaboratively and get more done.</h1>
      <h2>
        Trillo's boards, lists, and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way ☑️
      </h2>
      <HomeForm />
    </div>
  );
}

export default HomeContent