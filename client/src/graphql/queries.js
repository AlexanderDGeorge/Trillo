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
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;
export const GET_USER_BOARDS = gql`
	query userBoards($userId: ID!) {
		user(id: $userId) {
			boards{
				id
				title
			}
		}
	}
`;

export const GET_BOARD_LISTS = gql`
	query boardLists($boardId: ID!){
		board(id: $boardID){
			lists{
				id
				title
			}
		}
	}
`;

export const GET_LIST_CARDS = gql`
	query listCards($listId: ID!){
		list(id: $listId){
			title
			cards{
				_id
				title
			}
		}
	}
`;