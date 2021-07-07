import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (state, filter) => {
  let queryVariables;
  
  switch (state) {
    case "HIGHEST_RATED": {
      queryVariables = {"searchKeyword":`${filter}`, "orderBy": "RATING_AVERAGE", "orderDirection": "DESC"};
      break;
    }
    case "LOWEST_RATED": {
      queryVariables = {"searchKeyword":`${filter}`, "orderBy": "RATING_AVERAGE", "orderDirection": "ASC" };
      break;
    }
    default: {
      queryVariables = {"searchKeyword":`${filter}`, "orderBy": "CREATED_AT", "orderDirection": "DESC"};
      break;
    }
  }

    const { data, error, loading } = 
      useQuery(GET_REPOSITORIES, {
        variables: queryVariables,
        fetchPolicy: 'cache-and-network' 
    });

    const repositories = data?.repositories;

    return { repositories, error, loading };
};

export default useRepositories;