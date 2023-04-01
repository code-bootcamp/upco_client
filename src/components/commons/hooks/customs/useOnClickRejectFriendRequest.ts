import { useRouter } from "next/router";
import { useMutationRejectFriendRequest } from "../mutation/useMutationRejectFriendRequest";
import { FETCH_FRIEND_REQUESTS } from "../queries/useQueryFetchFriendRequests";

interface IUseOnClickRejectFriendRequest {
  onClickRejectFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickRejectFriendRequest = (): IUseOnClickRejectFriendRequest => {
  const router = useRouter();
  const [rejectFriendRequest] = useMutationRejectFriendRequest();

  const onClickRejectFriendRequest = (requestId: string) => async (): Promise<void> => {
    try {
      await rejectFriendRequest({
        variables: {
          requestId,
        },
        refetchQueries: [
          {
            query: FETCH_FRIEND_REQUESTS,
            variables: router.query,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { onClickRejectFriendRequest };
};
