import React,{ Component } from 'react';
import { Mutation } from 'react-apollo';

import { CREATE_CARD } from '../../graphql/mutations';
import { FETCH_CARDS } from '../../graphql/queries';


class AddCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title:'',
            description:'',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e,newCard) {
        e.preventDefault();

        newCard({
            variables:{
                title: this.state.title,
                description: this.state.description
            }
        }).then(() => this.clearData())
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    updateCache(cache, { data }){
        let cards;

        try{
            cards = cache.readQuey({query: FETCH_CARDS}) 
        }catch(err){
            return;
        }

        if(cards){
            let cardArray = cards.cards;
            let newCard = data.newCard;
            cache.writeQuery({
                query: FETCH_CARDS,
                data: {cards: cardArray.concat(newCard)}
            });
        }
    }

    clearData() {
        this.setState({
            name: ''
        })
    }

    render(){
        <Mutation
           mutation={CREATE_CARD}
           onError={err => this.setState({message: err.message})}
           update={(cache,data) => this.updateCache(cache,data)}
           onCompleted={data =>{
               const {title, description} = data.newCard;
               this.setState({
                   message: `New Card ${title} created successfully`
               })
               
           }}
           >
         <div>
           <form onSubmit={e => this.handleSubmit(e,newCard)}>
                <div className="card-field">
                    <label>Enter a title for this card</label>
                    <input type="text" value={this.state.title} onChange={this.update("title")}></input>
                    <label>Add a more detailed description</label>
                    <input type="text" value={this.state.description} onChange={this.update("description")}></input>
                </div>
                <button> Add Card</button>
            </form>    
            <p>{this.state.message}</p>
        </div>
        </Mutation> 
    }

}
