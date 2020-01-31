import React, { Component } from 'react';
import './board-css/boardForm.css';
import './board-css/boardList.css';

import BoardList from './board-list';
import AddBoard from './new-board';


class Board extends Component{
  render(){
    console.log(this.props);
    return(
      <div className="home-container">
        <h1>Personal Boards</h1>
        <div className="all-Boards">
          <BoardList />
        </div>
        <div>
          <AddBoard />
        </div>
      </div>
    );
  }
}

export default Board;