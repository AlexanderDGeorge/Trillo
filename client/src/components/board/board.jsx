import React, { Component } from 'react';
import './board.css';

import BoardList from './board-list';
import AddBook from './new-board';


class Board extends Component{
  render(){
    return(
      <div>
        <h1>Personal Boards</h1>
        <BoardList/>
        <AddBook/>
      </div>
    );
  }
}

export default Board;