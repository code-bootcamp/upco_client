import {
  DefaultContext,
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";

const PASSWORD_RESET_MAILER = gql`
  mutation passwordResetMailer($email: String!) {
    passwordResetMailer(email: $email)
  }
`;

export const useMutationPasswordMailer = (): MutationTuple<OperationVariables, DefaultContext> => {
  const result = useMutation(PASSWORD_RESET_MAILER);

  return result;
};
