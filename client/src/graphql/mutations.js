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

export const CREATE_CARD = gql`
   mutation CreateCard($title: String!, $description: String!) {
      newCard(title: $title, description: $description) {
        id
        title
        description
      }
   }
`;

export const DELETE_CARD = gql`
   mutation DeleteCard($id: ID!){
      deleteCard(_id:$id){
        id
      }
    }
`;

export const CREATE_COMMENT = gql`
    mutation CreateComment($body: String!) {
      newComment(body: $body) {
        id
        body
      }
    }

`;