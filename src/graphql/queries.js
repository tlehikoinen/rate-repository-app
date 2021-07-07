import { gql } from '@apollo/client';
import { REPOSITORY_LIST_ITEMS, REPOSITORY_REVIEW_ITEMS } from './fragments';

export const GET_REPOSITORIES = gql`
query getRepositories(
  $searchKeyword: String $orderBy: AllRepositoriesOrderBy $orderDirection: OrderDirection){
  repositories(searchKeyword: $searchKeyword orderBy: $orderBy orderDirection: $orderDirection) {
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
      ...RepositoryReviewFields
      url
    }
  }
  ${REPOSITORY_LIST_ITEMS}
  ${REPOSITORY_REVIEW_ITEMS}
`;

export const AUTHORIZED_USER = gql `
  query {
    authorizedUser {
      id
      username
    }
  }
`;