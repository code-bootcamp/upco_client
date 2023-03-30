import { gql, useMutation } from "@apollo/client";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      nickname
      email
      age
      interest
      image
    }
  }
`;

export const useMutationUpdateUser = () => {
  const result = useMutation(UPDATE_USER);
  return result;
};
