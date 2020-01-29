import React, { Component } from 'react';
import './board-css/boardForm.css';
import './board-css/boardList.css';

import BoardList from './board-list';
import AddBook from './new-board';


class Board extends Component{
  render(){
    return(
      <div className="home-container">
        <h1>Personal Boards</h1>
        <div className="all-Boards">
          <BoardList />
        </div>
        <div>
          <AddBook />
        </div>
      </div>
    );
  }
}

export default Board;