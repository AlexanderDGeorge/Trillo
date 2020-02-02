import React from "react";
import { Mutation } from "react-apollo";

import { REMOVE_LIST_CARD } from '../../graphql/mutations';
import { FETCH_CARDS } from "../../graphql/queries";



const linkStyle = {
    cursor: "pointer",
    fontSize: "10px",
    color: "red"
};

const DeleteCard = props => {
    return (
        <Mutation mutation={REMOVE_LIST_CARD}
            refetchQueries={() => {
                return [
                    {
                        query: FETCH_CARDS
                    }
                ];
            }}>
            {(removeListCard, { data }) => (
                <a
                    style={linkStyle}
                    onClick={e => {
                        e.preventDefault();
                        removeListCard({ variables: { listId: props.listId, cardId:props.cardId } });
                    }}
                >
                    <h3>Delete</h3>
                </a>
            )}
        </Mutation>
    );
};

export default DeleteCard;