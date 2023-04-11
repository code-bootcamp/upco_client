import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationLoginArgs } from "../../../../commons/types/generated/types";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const useMutationLogin = (): typeof result => {
  const result = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(LOGIN);

  return result;
};
