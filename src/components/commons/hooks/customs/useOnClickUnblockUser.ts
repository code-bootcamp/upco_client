import { useMutationUnblockUser } from "../mutation/useMutationUnblockUser";

interface IUseOnClickUnblockUser {
  onClickUnblockUser: (blockId: string) => () => Promise<void>;
}

export const useOnClickUnblockUser = (): IUseOnClickUnblockUser => {
  const [unblockUser] = useMutationUnblockUser();

  const onClickUnblockUser = (blockId: string) => async (): Promise<void> => {
    await unblockUser({
      variables: {
        blockId,
      },
    });
  };

  return { onClickUnblockUser };
};
