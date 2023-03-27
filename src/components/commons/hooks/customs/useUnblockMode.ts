import { useMutationUnblock } from "../mutation/useMutationUnblock";

export const useUnblockMode = (): {
  unblockFn: () => Promise<void>;
} => {
  const [unblock] = useMutationUnblock();

  const unblockFn = async (): Promise<void> => {
    await unblock({
      variables: {
        blockUserId: "",
      },
    });
  };

  return {
    unblockFn,
  };
};
