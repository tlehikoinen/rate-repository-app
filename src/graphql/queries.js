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