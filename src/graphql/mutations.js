import { gql } from '@apollo/client';


export const LOGIN_USER = gql `
  mutation loginUser($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
        accessToken
    }
  }
`;

export const CREATE_REVIEW = gql `
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
        repositoryId
        user{
          username
      }
    }
  }
`;

