import React from 'react';
import Query from 'react-apollo'
import { GET_LIST_CARDS } from '../../graphql/queries';

import CardItem from './card-item';


class CardList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    render(){
        <Query query={GET_LIST_CARDS}>
           {
               ({loading,error,data}) => {
                   if(loading) return <div>Loading cards ...</div>
                   if(error) return `Error! ${error.message}`;

                   return (
                       <div>
                           {data.list.cards.map( card => (
                                <div className="card-item">
                                    <CardItem key={card.id} title={card.title} description={card.description}/>
                                </div>
                           ))}

                       </div>
                   )

               }


           }

        </Query>
    }
}

export default CardList;