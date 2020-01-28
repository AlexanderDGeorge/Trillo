import React from "react";
import { Query } from "react-apollo";

import  { FETCH_BOARDS } from '../../graphql/queries';


const BoardList = () =>{
  return(
    <Query query={FETCH_BOARDS}>
      {
        ({loading, error, data}) =>{
          if(loading) return <div>Loading boards ...</div>;
          if(error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.boards.map(board =>(
                <li key={ board._id}>
                  { board.name}
                  ====> 
                  {board._id}
                </li>
              ))}
            </ul>
          );
        }
      }
    </Query>
  );
};

export default BoardList;