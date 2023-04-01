import { useMutationAcceptFriendRequest } from "../mutation/useMutationAcceptFriendRequest";

interface IUseOnClickAcceptFriendRequest {
  onClickAcceptFriendRequest: (requestId: string) => () => Promise<void>;
}

export const useOnClickAcceptFriendRequest = (): IUseOnClickAcceptFriendRequest => {
  const [acceptFriendRequest] = useMutationAcceptFriendRequest();

  const onClickAcceptFriendRequest = (requestId: string) => async (): Promise<void> => {
    const result = await acceptFriendRequest({
      variables: {
        requestId,
      },
    });
    console.log(result.data?.acceptFriendRequest, "!!!");
  };

  return { onClickAcceptFriendRequest };
};
