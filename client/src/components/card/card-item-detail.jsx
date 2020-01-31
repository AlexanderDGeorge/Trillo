import React, { Component } from 'react';
import {Query,Mutation} from 'react-apollo';
import DeleteCard from './delete-card';
import { UPDATE_CARD } from '../../graphql/mutations';

import CardModal from './card-modal';
import Backdrop from '../card/backdrop'

class CardItemDetail extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id: this.props.key,
            title: this.props.title,
            description: this.props.description,
            editing: this.props.state
        }
    }

    modalConfirmHandler = () => {
        this.setState({editing: false})

        updateCard({
            variables: {
                id: this.props.id,
                title: this.props.title,
                description: this.props.description
            }
        })
    }

    modalCancelHandler = () => {
        this.setState({editing: false})
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value})
    } 

    render() {
        return (
         <React.Fragment>
           {this.state.editing && <Backdrop />}

           {this.state.editing && <CardModal title={this.state.title} canCancel canConfrim onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
            
             <div className="card-detail">
                <Mutation mutation={UPDATE_CARD}>
                    <textarea 
                        placeholder={this.state.title}
                        onChange={this.update('title')}>
                    </textarea> 
                </Mutation>
                { (this.state.description == null) ? (
                   <Mutation mutation={UPDATE_CARD}>
                    <div className="description-field">
                            <label> Description </label>
                                <textarea
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder="Add a more detailed decription"
                                 >
                                </textarea>
                    </div>
                   </Mutation> 
                 ) : (
                    <div className="card-description">
                        {this.state.description}
                    </div>
                )
                  
                }
                 <DeleteCard id={this.props.key}/>
             </div>
            </CardModal> } 
            
        </React.Fragment>
        )
    }
}

