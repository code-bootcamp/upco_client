import {
  DefaultContext,
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";

const REPORT_OPPONENT = gql`
  mutation reportOpponent($reportedId: String!) {
    reportOpponent(reportedId: $reportedId) {
      id
    }
  }
`;

export const useMutationReport = (): MutationTuple<any, OperationVariables, DefaultContext> => {
  const result = useMutation(REPORT_OPPONENT);

  return result;
};
