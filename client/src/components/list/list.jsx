import React from 'react';
import ListItem from './list-item';
import NewList from './new-list';


function List(props) {
  return (
    
    <div  className="lists">
     
      {props.lists.map(list => (
        <div key={list.id} >
          <ListItem listId={list.id} boardId={props.boardId}/>
        </div>
      ))}
      <NewList boardId={props.boardId} />
    </div>
  )
}

export default List;