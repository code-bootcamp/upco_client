import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUserArgs } from "../../../../commons/types/generated/types";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      nickname
      email
      age
      interests {
        name
      }
      image
    }
  }
`;

export const useMutationUpdateUser = (): typeof result => {
  const result = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(UPDATE_USER);
  return result;
};
