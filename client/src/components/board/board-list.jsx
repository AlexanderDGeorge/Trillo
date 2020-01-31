import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import  { FETCH_BOARDS } from '../../graphql/queries';
import DeleteBoard from './delete-board';

class BoardList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selected: null
    }
  }

  render(){
    return (
      <Query query={FETCH_BOARDS}>
        {
          ({ loading, error, data }) => {
            if (loading) return <div>Loading boards ...</div>;
            if (error) return `Error! ${error.message}`;
            return (
              <div className="container">
                {data.boards.map(board => (
                  <div className="card" key={board.id}>
                  
                      <DeleteBoard id={board.id} />
                  
                    <br></br>
                    <Link to={`/boards/${board.id}`} >
                      <div className="container" >
                        <span className="board-tile-details" >
                          {board.title}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            );
          }
        }
      </Query>
    );
 }
};

export default BoardList;


