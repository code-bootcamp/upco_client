import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteFriendArgs } from "../../../../commons/types/generated/types";

const DELETE_FRIEND = gql`
  mutation deleteFriend($friendId: String!) {
    deleteFriend(friendId: $friendId)
  }
`;

export const useMutationDeleteFriend = (): [typeof deleteFriend] => {
  const [deleteFriend] = useMutation<Pick<IMutation, "deleteFriend">, IMutationDeleteFriendArgs>(
    DELETE_FRIEND
  );

  return [deleteFriend];
};
