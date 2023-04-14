import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationVerifyEmailArgs } from "../../../../commons/types/generated/types";

const VERIFY_EMAIL = gql`
  mutation verifyEmail($email: String!, $code: String!) {
    verifyEmail(email: $email, code: $code)
  }
`;

export const useMutationVerifyEmail = (): typeof result => {
  const result = useMutation<Pick<IMutation, "verifyEmail">, IMutationVerifyEmailArgs>(
    VERIFY_EMAIL
  );

  return result;
};
