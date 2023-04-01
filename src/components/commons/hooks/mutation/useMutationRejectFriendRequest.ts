import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationRejectFriendRequestArgs,
} from "../../../../commons/types/generated/types";

const REJECT_FRIEND_REQUEST = gql`
  mutation rejectFriendRequest($requestId: String!) {
    rejectFriendRequest(requestId: $requestId)
  }
`;

export const useMutationRejectFriendRequest = (): [typeof rejectFriendRequest] => {
  const [rejectFriendRequest] = useMutation<
    Pick<IMutation, "rejectFriendRequest">,
    IMutationRejectFriendRequestArgs
  >(REJECT_FRIEND_REQUEST);

  return [rejectFriendRequest];
};
