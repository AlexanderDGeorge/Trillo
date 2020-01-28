import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const FETCH_BOARDS = gql`
    query FetchBoards{
        boards{
            _id
            name
            users
        }
    }
`;