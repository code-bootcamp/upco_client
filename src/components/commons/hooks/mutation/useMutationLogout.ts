import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const useMutationLogout = (): [typeof logout] => {
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  return [logout];
};
