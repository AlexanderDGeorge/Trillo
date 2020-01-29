import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      id
      token
      loggedIn
    }
  }
`;

export const ADD_BOARD =gql`
  mutation AddBoard($title: String!){
    newBoard(title: $title){
    id
    title
    }
  }
`;

export const NEW_LIST = gql`
  mutation newList($title: String!) {
    newList(title: $title) {
      id
      title
    }
  }
`;

export const UPDATE_LIST = gql`
  mutation updateList($id: ID!, $title: String!) {
    updateList(id: $id, title: $title) {
      title
    }
  }
`;

export const ADD_BOARD_LIST = gql`
  mutation addBoardList($boardId: ID!, $listId: ID!) {
    addBoardList(boardId: $boardId, listId: $listId) {
      id
      title
      users {
        name
      }
      lists {
        id
        title
      }
    }
  }
  `;