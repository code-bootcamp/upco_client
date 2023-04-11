import { useMutationDeleteFriend } from "../mutation/useMutationDeleteFriend";

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
    });
  };

  return { onClickDeleteFriend };
};
