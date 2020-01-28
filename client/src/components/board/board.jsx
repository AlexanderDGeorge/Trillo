import React from "react";
import { Query } from "react-apollo";

import  { FETCH_BOARDS } from '../../graphql/queries';


const Board = () =>{
  return(
    <Query query={FETCH_BOARDS}>
      {
        ({loading, error, data}) =>{
          if(loading) return "Loading...";
          if(error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.boards.map(board =>(
                <li key={ board._id}>
                  { board.name}
                 
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

export default Board;