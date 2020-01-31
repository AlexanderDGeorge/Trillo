import React, { Component } from 'react';
import './board-css/boardForm.css';
import './board-css/boardList.css';

import BoardList from './board-list';
import AddBoard from './new-board';
import NavBar from '../nav/nav_bar';

class Board extends Component{
  render(){
    console.log(this.props);
    return(
      <div >
        <NavBar />
          <div className="leftPanel">
            <div>
              <h2>Feel free to add unlimited boards</h2>
              <p>Here you can add more boards</p>
              <br></br>
            </div>
            <div>
              <AddBoard />
            </div>
          </div>
         <div className="rightPanel">
          <div className="headerDetail">All Boards</div>
            <hr/>
            <BoardList />
        </div>
      </div>
    );
  }
}

export default Board;