import { useMutationBlockUser } from "../mutation/useMutationBlockUser";

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
    });
    console.log(result);
  };

  return { onClickBlockUser };
};
