import { useRouter } from "next/router";
import { useMutationAcceptFriendRequest } from "../mutation/useMutationAcceptFriendRequest";
import { FETCH_FRIENDS } from "../queries/useQueryFetchFriends";

interface IUseOnClickAcceptFriendRequest {
  onClickAcceptFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickAcceptFriendRequest = (): IUseOnClickAcceptFriendRequest => {
  const router = useRouter();
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
      ],
    });
  };

  return { onClickAcceptFriendRequest };
};
