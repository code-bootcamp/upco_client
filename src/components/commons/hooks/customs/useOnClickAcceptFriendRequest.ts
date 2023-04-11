import { useMutationAcceptFriendRequest } from "../mutation/useMutationAcceptFriendRequest";
import { FETCH_FRIEND_REQUESTS } from "../queries/useQueryFetchFriendRequests";
import { FETCH_FRIENDS } from "../queries/useQueryFetchFriends";

interface IUseOnClickAcceptFriendRequest {
  onClickAcceptFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickAcceptFriendRequest = (): IUseOnClickAcceptFriendRequest => {
  const [acceptFriendRequest] = useMutationAcceptFriendRequest();

  const onClickAcceptFriendRequest = (requestId: string) => async (): Promise<void> => {
    await acceptFriendRequest({
      variables: {
        requestId,
      },
      refetchQueries: [
        {
          query: FETCH_FRIENDS,
        },
        {
          query: FETCH_FRIEND_REQUESTS,
        },
      ],
    });
  };

  return { onClickAcceptFriendRequest };
};
