import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListContainer } from '../../components/RepositoryList';
import { expect } from '@jest/globals';
import { ratingHandler } from '../../components/RepositoryList/RatingItem';


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);
      const firstRepository = repositories.edges[0].node;
      const secondRepository = repositories.edges[1].node;

      const repositoryFullNames = getAllByTestId("fullname");
      expect(repositoryFullNames[0]).toHaveTextContent(firstRepository.fullName);
      expect(repositoryFullNames[1]).toHaveTextContent(secondRepository.fullName);

      const repositoryDescriptions = getAllByTestId("description");
      expect(repositoryDescriptions[0]).toHaveTextContent(firstRepository.description);
      expect(repositoryDescriptions[1]).toHaveTextContent(secondRepository.description);

      const repositoryLanguages = getAllByTestId("language");
      expect(repositoryLanguages[0]).toHaveTextContent(firstRepository.language);
      expect(repositoryLanguages[1]).toHaveTextContent(secondRepository.language);

      const repositoryStargazerCounts = getAllByTestId("stars");
      expect(repositoryStargazerCounts[0]).toHaveTextContent(ratingHandler(firstRepository.stargazersCount));
      expect(repositoryStargazerCounts[1]).toHaveTextContent(ratingHandler(secondRepository.stargazersCount));

      const repositoryForkCounts = getAllByTestId("forks");
      expect(repositoryForkCounts[0]).toHaveTextContent(ratingHandler(firstRepository.forksCount));
      expect(repositoryForkCounts[1]).toHaveTextContent(ratingHandler(secondRepository.forksCount));

      const repositoryAverageCounts = getAllByTestId("rating");
      expect(repositoryAverageCounts[0]).toHaveTextContent(firstRepository.ratingAverage);
      expect(repositoryAverageCounts[1]).toHaveTextContent(secondRepository.ratingAverage);

      const repositoryReviewCounts = getAllByTestId("reviews");
      expect(repositoryReviewCounts[0]).toHaveTextContent(ratingHandler(firstRepository.reviewCount));
      expect(repositoryReviewCounts[1]).toHaveTextContent(ratingHandler(secondRepository.reviewCount));





    });
  });
});