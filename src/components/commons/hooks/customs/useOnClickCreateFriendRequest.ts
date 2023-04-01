import { useMutationCreateFriendRequest } from "../mutation/useMutationCreateFriendRequest";

interface IUseOnClickCreateFriendRequest {
  onClickCreateFriendRequest: (id: string) => () => Promise<void>;
}

export const useOnClickCreateFriendRequest = (): IUseOnClickCreateFriendRequest => {
  const [createFriendRequest] = useMutationCreateFriendRequest();

  const onClickCreateFriendRequest = (id: string) => async (): Promise<void> => {
    await createFriendRequest({
      variables: {
        receiverId: id,
      },
    });
  };

  return { onClickCreateFriendRequest };
};
