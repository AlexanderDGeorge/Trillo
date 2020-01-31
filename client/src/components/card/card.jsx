import React,{Component} from 'react';
import CardList from './card-list';
import AddCard from './new-card';


class Card extends Component {

        render(){


            return(
                 <div className="card-container">
                     <h1>List of Cards</h1>
                     <div className="all-cards">
                          <CardList/>  
                     </div>
                     <div className="add-card">
                          <AddCard/> 
                    </div>
                 </div>
            )
        }

}
export default Card;