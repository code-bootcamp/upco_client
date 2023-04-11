import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUnblockUserArgs } from "../../../../commons/types/generated/types";

const UNBLOCK_USER = gql`
  mutation unblockUser($blockId: String!) {
    unblockUser(blockId: $blockId) {
      id
    }
  }
`;

export const useMutationUnblockUser = (): [typeof unblockUser] => {
  const [unblockUser] = useMutation<Pick<IMutation, "unblockUser">, IMutationUnblockUserArgs>(
    UNBLOCK_USER
  );

  return [unblockUser];
};
