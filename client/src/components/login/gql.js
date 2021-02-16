import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login( $id : String!, $pwd: String!) {
    login ( id : $id, pwd : $pwd ) {
      id
      name
      email
    }
  }
`;

export const USERS = gql`
  query users {
      users {
        id
        name
        email
      }
    }
`;