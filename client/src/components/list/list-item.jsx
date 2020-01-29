import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_LIST_CARDS } from '../../graphql/queries';
import { UPDATE_LIST } from '../../graphql/mutations';
import './list.css';

// List component takes in listId as a prop

function ListItem(props) {
  const [updateList] = useMutation(UPDATE_LIST);
  const { loading, data } = useQuery(GET_LIST_CARDS, {
    variables: { listId: props.listId },
  });


  function handleChange(e) {
    e.preventDefault();
    updateList({ variables: { id: props.listId, title: e.target.value } });
  }


  if (loading) {
    //loading component here
    return null;
  } else {
    return (
      <div className="list-item">
        <input
          className="list-item-title"
          type="text"
          defaultValue={data.list.title}
          onChange={e => handleChange(e)} />
        <div className="list-item-card">
          card components go here
        </div>
      </div>
    )
  }
}

export default ListItem;