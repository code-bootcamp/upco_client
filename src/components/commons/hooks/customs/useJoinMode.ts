import { useMutationCreateUser } from "../mutation/useMutattionCreateUser";

interface IData {
  name: string;
  email: string;
  password: string;
}

export const useJoinMode = (): {
  onClickJoin: (data: IData) => Promise<void>;
} => {
  const [createUser] = useMutationCreateUser();

  const onClickJoin = async (data: IData): Promise<void> => {
    const result = await createUser({
      variables: {
        createUserInput: {
          nickname: data.name,
          email: data.email,
          password: data.password,
          age: 0,
        },
      },
    });
    alert("회원가입 되었습니다.");
  };

  return {
    onClickJoin,
  };
};
