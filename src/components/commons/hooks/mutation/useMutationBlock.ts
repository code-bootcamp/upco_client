import {
  DefaultContext,
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";

const BLOCK_OPPONENT = gql`
  mutation blockOpponent($userId: String!, $blockUserId: String!) {
    blockOpponent(userId: $userId, blockUserId: $blockUserId) {
      id
    }
  }
`;

export const useMutationBlock = (): MutationTuple<OperationVariables, DefaultContext> => {
  const result = useMutation(BLOCK_OPPONENT);

  return result;
};
