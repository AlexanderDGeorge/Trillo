import React from 'react';

import NavBar from '../nav/nav_bar';
import HomeContent from './home-content';
import { useQuery } from 'react-apollo';
import { IS_LOGGED_IN } from '../../graphql/queries';
import BoardList from '../board/board-list';

import './home.css';

function Home() {
  const { data } = useQuery(IS_LOGGED_IN);
  if (!data.isLoggedIn){
    return (
      <div className="home">
        <NavBar/>
        <HomeContent/>
      </div>
    );
  } else {
    return (
      <div className="home">
        <NavBar/>
        <BoardList/>
      </div>
    )
  }


}

export default Home;