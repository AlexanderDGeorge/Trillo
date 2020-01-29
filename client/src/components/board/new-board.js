import React, {Component} from 'react';
import { Mutation } from "react-apollo";

import { ADD_BOARD } from '../../graphql/mutations';
import { FETCH_BOARDS } from '../../graphql/queries';


class AddBoard extends Component{
  constructor(props){
    super(props);
    this.state={
      title: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, newBoard) {
 
   e.preventDefault();
    newBoard({
      variables:{
        title: this.state.title
      }
    }).then(() => this.clearData());
    
  }
  
  
  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateCache(cache, { data }){
    let boards;
    try{
      boards = cache.readQuery({ query: FETCH_BOARDS })
    } catch(err){
      return;
    }
    if(boards){
      let boardArray = boards.boards;
      let newBoard = data.newBoard;
      cache.writeQuery({
        query: FETCH_BOARDS,
        data: { boards: boardArray.concat(newBoard)}
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
        mutation={ADD_BOARD} 
        onError={err =>this.setState({message: err.message})}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={data =>{
          const { title } = data.newBoard;
          this.setState({
            message: `New board ${title} created successfully`
          });
        }}>
          {(newBoard, { data }) => (
          <div>
            <form onSubmit={ e => this.handleSubmit(e, newBoard)}>
              <div className="field">
                <label> Title </label>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update("title")} />
              </div>
              <button>+</button>
            </form>
            <p>{this.state.message}</p>
          </div>
          )}

      </Mutation>
   
    );
  }

}

export default AddBoard;
