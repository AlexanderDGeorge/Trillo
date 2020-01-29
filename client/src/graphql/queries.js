import gql from "graphql-tag";
import BoardList from "../components/board/board-list";

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const FETCH_BOARDS = gql`
    query FetchBoards{
        boards{
            id
            title
           
        }
    }
`;

export const FETCH_BOARD =gql`
query FetchBoard($id: ID!){
    board(id: $id){
        id
        title
        users{
            id
            name
        }
        lists{
            id
            title
        }
    }
}
`;