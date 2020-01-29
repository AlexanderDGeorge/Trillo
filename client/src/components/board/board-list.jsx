import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import  { FETCH_BOARDS } from '../../graphql/queries';

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
             <div>
                {data.boards.map(board => (
                  <Link to={`/boards/${board.id}`} >
                    <div  className="card" >
                      <div className="container" key={board.id}>
                        <span className="board-tile-details">
                          {board.title}
                        </span>
                      </div>
                    </div>
                  </Link>
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


