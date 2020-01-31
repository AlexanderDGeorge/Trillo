import gql from "graphql-tag";
import BoardList from "../components/board/board-list";

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

export const GET_BOARD_USERS = gql`
	query boardUsers($boardId: ID!){
		board(id: $boardId){
			users{
				id
				name
			}
		}
	}
`;