import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationBlockUserArgs } from "../../../../commons/types/generated/types";

const BLOCK_USER = gql`
  mutation blockUser($blockedUserId: String!) {
    blockUser(blockedUserId: $blockedUserId) {
      id
    }
  }
`;

export const useMutationBlockUser = (): [typeof blockUser] => {
  const [blockUser] = useMutation<Pick<IMutation, "blockUser">, IMutationBlockUserArgs>(BLOCK_USER);

  return [blockUser];
};
