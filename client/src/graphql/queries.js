import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const FETCH_CARDS = gql`
    query FetchCards {
        cards {
            _id
            title
            description
        }
    }

`;

export const FETCH_COMMENTS = gql`
    query FetchComments{
        comments {
            _id
            body
        }
    }

`;