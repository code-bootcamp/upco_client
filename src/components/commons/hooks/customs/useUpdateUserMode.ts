import { useMutationUpdateUser } from "../mutation/useMutationUpdateUser";

interface IData {
  nickname: string;
  age: number;
  interests: string[];
}

export const useUpdateUserMode = (): {
  onClickUpdate: (data: IData) => Promise<void>;
} => {
  const [updateUser] = useMutationUpdateUser();

  const onClickUpdate = async (data: IData): Promise<void> => {
    const result = await updateUser({
      variables: {
        updateUserInput: {
          nickname: data.nickname,
          age: data.age,
          interests: data.interests,
        },
      },
    });
    alert("회원 정보가 수정되었습니다.");
  };

  return { onClickUpdate };
};
