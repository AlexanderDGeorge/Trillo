import React, {Component} from 'react';
import { Mutation } from "react-apollo";

import { ADD_USER_BOARD } from '../../graphql/mutations'; 
import { FETCH_BOARDS } from '../../graphql/queries';
import { GET_USER_BOARDS } from "../../graphql/queries";

class AddBoard extends Component{
  constructor(props){
    super(props);
    this.state={
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, newUserBoard) {
   e.preventDefault();
    newUserBoard({
      variables:{
        userId: localStorage.getItem("id"),
        title: this.state.title
      }
    }).then((board) => this.clearData());
  }
  
  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateCache(cache, { data }){
    let user;
    const id = localStorage.getItem("id");
    try{
      user = cache.readQuery({ query: GET_USER_BOARDS, variables:{id} })
    } catch(err){
      return;
    }
    if(user){
      let boardArray = user.user.boards;
      let newUserBoard = data.newUserBoard;
     
      cache.writeQuery({
        query: GET_USER_BOARDS,
        variables: {id},
        data: { user: newUserBoard }
      });
    }
  }

  clearData() {
    this.setState({
      title: ''
     
    })
  }

  render(){
    return(

      <Mutation
        mutation={ADD_USER_BOARD} 
        onError={err =>this.setState({message: err.message})}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={data =>{
          const { title } = data.newUserBoard;
          this.setState({
            message: `New board ${title} created successfully`
          });
        }}>
          {(newUserBoard, { data }) => (
          <div>
            <form onSubmit={ e => this.handleSubmit(e, newUserBoard)}>
              <div className="field">
                <input type="text" placeholder="Board name"
                  value={this.state.title}
                  onChange={this.update("title")} />
              </div>
              <button disabled={!this.state.title} >+</button>
            </form>
          </div>
          )}

      </Mutation>
   
    );
  }

}

export default AddBoard;
