import {
  useMutation,
  gql,
  OperationVariables,
  DefaultContext,
  MutationTuple,
} from "@apollo/client";

const UNBLOCK_OPPONENT = gql`
  mutation unblockOpponent($blockUserId: String!) {
    unblockOpponent(blockUserId: $blockUserId)
  }
`;

export const useMutationUnblock = (): MutationTuple<OperationVariables, DefaultContext> => {
  const result = useMutation(UNBLOCK_OPPONENT);

  return result;
};
