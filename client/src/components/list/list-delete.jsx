import React from 'react';
import { useMutation } from 'react-apollo';
import { DELETE_LIST, REMOVE_BOARD_LIST } from '../../graphql/mutations';

function ListDelete(props) {
  const [deleteList] = useMutation(DELETE_LIST);

  function handleClick(){
    deleteList({variables: {id: props.listId}}).then(
      ({data}) => console.log(data)
    )
  }

  return (
    <button onClick={handleClick}>
      X
    </button>
  )
}

export default ListDelete;