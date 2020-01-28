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

export const NEW_LIST = gql`
  mutation newList($title: String!) {
    newList(title: $title) {
      id
      title
    }
  }
`;

export const ADD_BOARD_LIST = gql`
  mutation addBoardList($boardId: String!, $listId: String!) {
    addBoardList(boardId: $boardId, listId: $listId) {
      id
      title
      lists {
        id
        title
      }
    }
  }
`;