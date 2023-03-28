import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationAddFriendArgs } from "../../../../commons/types/generated/types";

const ADD_FRIEND = gql`
  mutation addFriend($isSuccess: Boolean!, $userId: String!, $opponentId: String!) {
    addFriend(isSuccess: $isSuccess, userId: $userId, opponentId: $opponentId) {
      id
    }
  }
`;

export const useMutationAddFriend = (): [typeof addFriend] => {
  const [addFriend] = useMutation<Pick<IMutation, "addFriend">, IMutationAddFriendArgs>(ADD_FRIEND);

  return [addFriend];
};
