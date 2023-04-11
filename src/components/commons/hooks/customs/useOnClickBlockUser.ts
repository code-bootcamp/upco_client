import { useMutationBlockUser } from "../mutation/useMutationBlockUser";
import { FETCH_FRIENDS } from "../queries/useQueryFetchFriends";

interface IUseOnClickBlockUser {
  onClickBlockUser: (blockedUserId: string) => () => Promise<void>;
}

export const useOnClickBlockUser = (): IUseOnClickBlockUser => {
  const [blockUser] = useMutationBlockUser();

  const onClickBlockUser = (blockedUserId: string) => async (): Promise<void> => {
    const result = await blockUser({
      variables: {
        blockedUserId,
      },
      refetchQueries: [
        {
          query: FETCH_FRIENDS,
        },
      ],
    });
    console.log(result);
  };

  return { onClickBlockUser };
};
