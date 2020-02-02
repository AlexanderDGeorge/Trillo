
import React, { useState } from 'react';
import { useMutation } from 'react-apollo';

import { CREATE_CARD, ADD_LIST_CARD } from '../../graphql/mutations';
import { FETCH_LIST } from '../../graphql/queries';
import './card-css/card.css'

function AddCard(props) {
    const [newCard] = useMutation(CREATE_CARD);
    const [addListCard] = useMutation(ADD_LIST_CARD, {
        update(cache, {data: { addListCard} } ) {
            cache.writeQuery({
                query: FETCH_LIST,
                variables: { id: props.listId},
                data: { list: addListCard }
            })
        }
    })

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        newCard({ variables: { title, description }}).then(
            ({data}) => addListCard({ variables: {
                listId: props.listId,
                cardId: data.newCard.id
            }})
        )
        setOpen(false);
        setTitle("");
        setDescription("");
    }

     if (open){
         return(
             <div>
                 <form 
                   className="card-add-form"
                   onSubmit={e => handleSubmit(e)}>

                       <input
                         className="card-title-textbox"
                         type="text" 
                         placeholder="Enter card title..."
                         onChange={e => setTitle(e.target.value)}
                            />
                         
                         <button type="submit">
                             Add Card
                         </button>
                        
                        <button onClick={() => {setOpen(false)}}>
                              Cancel

                        </button>
                      

                 </form>
                   
             </div>
         )
     } else {
         return (
             <button
                className="card-add"
                onClick={() => setOpen(true)}
                >
                 +  Add another card  
             </button>
         )
     }
  
}

export default AddCard;