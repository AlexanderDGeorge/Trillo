import React from 'react';
import ListItem from './list-item';
import NewList from './new-list';

function List(props) {
  return (
    <div className="lists">
      {props.lists.map(list => (
        <ListItem listId={list.id} />
      ))}
      <NewList boardId={props.boardId} />
    </div>
  )
}

export default List;