import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_LIST_CARDS } from '../../graphql/queries';

// List component takes in listId as a prop

function List(props ="5e2fd18895bd66699026ff58") {
  const { data } = useQuery(GET_LIST_CARDS, {
    variables: {id: props.listId}
  });

  console.log(data);

  return (
    <div className="list-item">
      <h3>{data}</h3>
      card component goes here

    </div>
  )
}

export default List;