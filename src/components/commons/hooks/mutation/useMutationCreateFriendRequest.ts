import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateFriendRequestArgs,
} from "../../../../commons/types/generated/types";

const CREATE_FRIEND_REQUEST = gql`
  mutation createFriendRequest($receiverId: String!) {
    createFriendRequest(receiverId: $receiverId) {
      id
    }
  }
`;

export const useMutationCreateFriendRequest = (): [typeof createFriendRequest] => {
  const [createFriendRequest] = useMutation<
    Pick<IMutation, "createFriendRequest">,
    IMutationCreateFriendRequestArgs
  >(CREATE_FRIEND_REQUEST);

  return [createFriendRequest];
};
