import React, { Component } from 'react';
import List from '../list/list';

class BoardIndex extends Component {
  render() {
    return (
      <div className="board-index">
        <h1>Boards</h1>
        <div>
          board links go here
          <List/>
        </div>
      </div>
    )
  }
}

export default BoardIndex;