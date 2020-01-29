import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_LIST_CARDS } from '../../graphql/queries';
import './list.css';
import { UPDATE_LIST } from '../../graphql/mutations';

// List component takes in listId as a prop

function List(props) {
  const [updateList] = useMutation(UPDATE_LIST);
  const { error, loading, data } = useQuery(GET_LIST_CARDS, {
    variables: { listId: '5e2fd18895bd66699026ff58' },
  });


  function handleChange(e){
    e.preventDefault();
    updateList({ variables: { id: '5e2fd18895bd66699026ff58', title: e.target.value }});
  }


  if (loading){
    //loading component here
    return null;
  } else {
    return (
      <div className="list-item">
        <input 
          className="list-item-title"
          type="text" 
          defaultValue={data.list.title}
          onChange={e => handleChange(e)}/>
        card component goes here
  
      </div>
    )
  }
}

export default List;