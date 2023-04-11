import { gql, useMutation } from "@apollo/client";

const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

export const useMutationDeleteUser = (): [typeof deleteUser] => {
  const [deleteUser] = useMutation(DELETE_USER);

  return [deleteUser];
};
