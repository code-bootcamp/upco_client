import { useMutationRejectFriendRequest } from "../mutation/useMutationRejectFriendRequest";
import { FETCH_FRIEND_REQUESTS } from "../queries/useQueryFetchFriendRequests";
import { FETCH_FRIENDS } from "../queries/useQueryFetchFriends";

interface IUseOnClickRejectFriendRequest {
  onClickRejectFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickRejectFriendRequest = (): IUseOnClickRejectFriendRequest => {
  const [rejectFriendRequest] = useMutationRejectFriendRequest();

  const onClickRejectFriendRequest = (requestId: string) => async (): Promise<void> => {
    try {
      await rejectFriendRequest({
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
    } catch (error) {
      alert(error);
    }
  };

  return { onClickRejectFriendRequest };
};
