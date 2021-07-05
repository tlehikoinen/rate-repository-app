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
