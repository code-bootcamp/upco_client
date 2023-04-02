import { useRouter } from "next/router";
import { useMutationAcceptFriendRequest } from "../mutation/useMutationAcceptFriendRequest";
import { FETCH_FRIEND_REQUESTS } from "../queries/useQueryFetchFriendRequests";

interface IUseOnClickAcceptFriendRequest {
  onClickAcceptFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickAcceptFriendRequest = (): IUseOnClickAcceptFriendRequest => {
  const router = useRouter();
  const [acceptFriendRequest] = useMutationAcceptFriendRequest();
  console.log("렌더링!");

  const onClickAcceptFriendRequest = (requestId: string) => async (): Promise<void> => {
    await acceptFriendRequest({
      variables: {
        requestId,
      },
      refetchQueries: [
        {
          query: FETCH_FRIEND_REQUESTS,
          // variables: router.query.
        },
      ],
    });
  };

  return { onClickAcceptFriendRequest };
};
