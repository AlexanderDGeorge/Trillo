import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo";


import { FETCH_BOARD } from '../../graphql/queries';


class BoardDetail extends Component{
  constructor(props) {
    super(props);
    this.state ={ editing: false};
  }

  render(){
    return(
      <Query 
      query={FETCH_BOARD}
      variables={{ id: this.props.match.params.boardId}}
      >
        {({loading, error, data})=>{
          if(loading) return <h1>Loading...</h1>;
          return(
            <div onClick={()=> this.setState({editing: true})}>
              <h1>
                {data.board.title}
              </h1>
            </div>
          );
        }}

      </Query>
    );
  }
}

export default BoardDetail;