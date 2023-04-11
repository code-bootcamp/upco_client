import { useMutationDeleteFriend } from "../mutation/useMutationDeleteFriend";
import { FETCH_FRIENDS } from "../queries/useQueryFetchFriends";

interface IUseOnClickDeleteFriend {
  onClickDeleteFriend: (friendId: string) => () => Promise<void>;
}

export const useOnClickDeleteFriend = (): IUseOnClickDeleteFriend => {
  const [deleteFriend] = useMutationDeleteFriend();

  const onClickDeleteFriend = (friendId: string) => async (): Promise<void> => {
    await deleteFriend({
      variables: {
        friendId,
      },
      refetchQueries: [
        {
          query: FETCH_FRIENDS,
        },
      ],
    });
  };

  return { onClickDeleteFriend };
};
