import React, {Component} from 'react';
import { Query } from "react-apollo";

import { ADD_BOARD } from '../../graphql/mutations';

class AddBoard extends Component{
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();

  }
    //const reservation = Object.assign({}, this.state);

    // this.props.composeReservation(reservation).then((result) => {
    //   this.clearData();
    // }).catch((result) => {
    //   console.log(result);
    // });
  
  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  clearData() {
    this.setState({
      name: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="field">
            <label> Name </label>
                <input type="text"
                 value={this.state.name}
                 onChange={this.update("name")}/>
             
            </div>
            <button>+</button>
        </form>
      </div>
    );
  }

}

export default AddBoard;
