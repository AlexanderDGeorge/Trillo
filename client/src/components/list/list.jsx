import React from 'react';
import ListItem from './list-item';
import ListNew from './list-new';

function List(props) {
  return (
    <div className="lists">
      {props.lists.map(list => (
        <ListItem listId={list.id} boardId={props.boardId}/>
      ))}
      <ListNew boardId={props.boardId} />
    </div>
  )
}

export default List;