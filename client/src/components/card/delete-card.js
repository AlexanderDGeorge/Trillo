import React from "react";
import { Mutation } from "react-apollo";

import { DELETE_CARD } from '../../graphql/mutations';
import { FETCH_CARDS } from "../../graphql/queries";

const linkStyle = {
    cursor: "pointer",
    fontSize: "10px",
    color: "red"
};

const DeleteCard = props => {
    return (
        <Mutation mutation={DELETE_CARD}
            refetchQueries={() => {
                return [
                    {
                        query: FETCH_CARDS
                    }
                ];
            }}>
            {(deleteCard, { data }) => (
                <a
                    style={linkStyle}
                    onClick={e => {
                        e.preventDefault();
                        deleteCard({ variables: { id: props.id } });
                    }}
                >
                    <p>Delete</p>
                </a>
            )}
        </Mutation>
    );
};

export default DeleteCard;