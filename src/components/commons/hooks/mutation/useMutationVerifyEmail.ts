import { gql, useMutation } from "@apollo/client";

const VERIFY_EMAIL = gql`
  mutation verifyEmail($email: String!, $code: String!) {
    verifyEmail(email: $email, code: $code)
  }
`;

export const useMutationVerifyEmail = () => {
  const result = useMutation(VERIFY_EMAIL);

  return result;
};
