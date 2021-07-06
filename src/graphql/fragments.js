import { gql } from '@apollo/client';

export const REPOSITORY_LIST_ITEMS = gql `
  fragment RepositoryFields on Repository {
        fullName
        description
        language
        ownerAvatarUrl
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        id   
   }
`;
export const REPOSITORY_REVIEW_ITEMS = gql `
fragment RepositoryReviewFields on Repository {
  reviews {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
      }
    }
  }
}
`;
