import { gql } from '@apollo/client';
import { REPOSITORY_LIST_ITEMS } from './fragments';

export const GET_REPOSITORIES = gql`
query {
  repositories(orderDirection:ASC) {
    edges {
        node {
            ...RepositoryFields
        }
    }
  }
}
${REPOSITORY_LIST_ITEMS}
`;

export const GET_REPOSITORY = gql `
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      url
    }
  }
  ${REPOSITORY_LIST_ITEMS}
`;

export const AUTHORIZED_USER = gql `
  query {
    authorizedUser {
      id
      username
    }
  }
`;