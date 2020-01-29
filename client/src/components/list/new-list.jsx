import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { NEW_LIST, ADD_BOARD_LIST } from '../../graphql/mutations';
import { FETCH_BOARD } from '../../graphql/queries';
import BoardList from '../board/board-list';

function NewList(props){
  const [newList] = useMutation(NEW_LIST);
  const [addBoardList] = useMutation(ADD_BOARD_LIST, {
    update(cache, { data: { addBoardList } }) {
      cache.writeQuery({ 
        query: FETCH_BOARD, 
        variables: { id: props.boardId },
        data: { board: addBoardList }
      })
    }
  });
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    newList({ variables: { title: title }}).then(
      ({ data }) => addBoardList({ variables: {
        boardId: props.boardId, 
        listId: data.newList.id
    }}));
    setOpen(false);
    setTitle("");
  }

  if (open){
    return (
      <form onSubmit={e => handleSubmit(e)}>
        <input 
          type="text"
          placeholder="Enter list title..."
          onChange={e => setTitle(e.target.value)}
          />
        <button type="submit">
          Add List
        </button>
        <button onClick={() => {setOpen(false); setTitle("")}}>
          X
        </button>
      </form>
    )
  } else {
    return (
      <button onClick={() => setOpen(true)}>
        Add another list
      </button>
    )
  }
}

export default NewList;