import React, { Component } from 'react';
import { Mutation } from "react-apollo";

import { DELETE_BOARD } from '../../graphql/mutations';
import { FETCH_BOARDS } from '../../graphql/queries';

class  DeleteBoard extends Component{
  constructor(props){
    super(props);
    this.state={
      title: this.props.title ,
      message: ''
    }
  }

  updateCache(cache, { data }) {
    let boards;
    try {
      boards = cache.readQuery({ query: FETCH_BOARDS })
    } catch (err) {
      return;
    } 
    if (boards) {
      let boardArray = (Object.assign(boards.boards));
      cache.writeQuery({
        query: FETCH_BOARDS,
        data: { boards: boardArray.filter(item => item.id !== this.props.id) }
      });
    }
  }

  render(){
  return (
    <Mutation mutation={DELETE_BOARD}
      onError={err => this.setState({ message: err.message })}
      update={(cache, data) => this.updateCache(cache, data)}
      >
      {(deleteBoard,{ data }) =>(
        <a onClick ={ e => {
          e.preventDefault();
          deleteBoard({ variables: { id: this.props.id }});
        }}
        >
          <p>x</p>
        </a>
      )}
    </Mutation>
  );
  }
};

export default DeleteBoard;