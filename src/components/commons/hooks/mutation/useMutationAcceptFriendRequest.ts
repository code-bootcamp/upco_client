import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationAcceptFriendRequestArgs,
} from "../../../../commons/types/generated/types";

const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptFriendRequest($requestId: String!) {
    acceptFriendRequest(requestId: $requestId)
  }
`;

export const useMutationAcceptFriendRequest = (): [typeof acceptFriendRequest] => {
  const [acceptFriendRequest] = useMutation<
    Pick<IMutation, "acceptFriendRequest">,
    IMutationAcceptFriendRequestArgs
  >(ACCEPT_FRIEND_REQUEST);

  return [acceptFriendRequest];
};
