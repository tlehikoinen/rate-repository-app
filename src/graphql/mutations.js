import { gql } from '@apollo/client';


export const LOGIN_USER = gql `
  mutation loginUser($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
        accessToken
    }
  }
`;

