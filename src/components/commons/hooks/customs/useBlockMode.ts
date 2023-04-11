import { useMutationBlock } from "../mutation/useMutationBlock";

export const useBLockMode = (): {
  onClickBlock: () => Promise<void>;
} => {
  const [blockOpponent] = useMutationBlock();

  const onClickBlock = async (): Promise<void> => {
    await blockOpponent({
      variables: {
        usserId: "",
        blockUserId: "",
      },
    });
  };

  return {
    onClickBlock,
  };
};
