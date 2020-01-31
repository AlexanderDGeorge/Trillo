import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

import { FETCH_CARD } from '../../graphql/queries';

import CardItemDetail from './card-item-detail';


class CardItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {editing:false};
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick() {
        this.setState({
            editing: true
        })
        return (
            <CardItemDetail key={this.props.key} title={this.props.title} description={this.props.description} state={this.state.editing} />
        )
        
    }


    render(){
     
      return (
        <Query
         query={ FETCH_CARD } 
         variables={{id:this.props.match.params.key}}
         >
             {({loading,error,data}) => {
                 if (loading) return <h1>Loading....</h1>

                 return (
                     <div onClick={this.handleCardClick}>
                         <span> {this.props.title}</span>
                     </div>
                 );
             }}


        </Query>
      );
 }
}
export default CardItem ;