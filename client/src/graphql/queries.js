import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;
export const GET_USER_BOARDS = gql`
	query userBoards($userId: String!) {
		user(id: $userId) {
			boards{
				id
				title
			}
		}
	}
`;

export const GET_BOARD_LISTS = gql`
	query boardLists($boardId: String!){
		board(id: $boardID){
			lists{
				id
				title
			}
		}
	}
`;

export const GET_LIST_CARDS = gql`
	query listCards($listId: String!){
		list(id: $listId){
			title
			cards{
				id
				title
			}
		}
	}
`;