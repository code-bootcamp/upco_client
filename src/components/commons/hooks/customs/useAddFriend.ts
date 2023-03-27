import { IMutationAddFriendArgs } from "../../../../commons/types/generated/types";
import { useMutationAddFriend } from "../mutation/useMutationAddFriend";

interface IUseAddFriend {
  onClickAddFriend: (data: IMutationAddFriendArgs) => Promise<void>;
}

export const useAddFriend = (): IUseAddFriend => {
  const [addFriend] = useMutationAddFriend();

  const onClickAddFriend = async (data: IMutationAddFriendArgs): Promise<void> => {
    const result = await addFriend({
      variables: {
        isSuccess: data.isSuccess,
        userId: data.userId,
        opponentId: data.opponentId,
      },
    });
    console.log(result);
  };

  return { onClickAddFriend };
};
