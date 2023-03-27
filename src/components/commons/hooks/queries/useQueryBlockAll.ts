import { gql, OperationVariables, QueryResult, useQuery } from "@apollo/client";

const FETCH_BLOCK_ALL_OPPONENT = gql`
  query {
    fetchBlockAllOpponent {
      id
      user {
        name
        image
      }
    }
  }
`;

export const useQueryBlockAll = (): QueryResult<OperationVariables> => {
  const result = useQuery(FETCH_BLOCK_ALL_OPPONENT);

  return result;
};
