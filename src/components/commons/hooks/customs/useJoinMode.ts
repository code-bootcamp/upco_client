import { Dispatch, SetStateAction } from "react";
import { useMutationCreateUser } from "../mutation/useMutattionCreateUser";

interface IData {
  name: string;
  email: string;
  password: string;
}

export const useJoinMode = (
  isVerify: boolean,
  setErrors: Dispatch<SetStateAction<string>>
): {
  onClickJoin: (data: IData) => Promise<void>;
} => {
  const [createUser] = useMutationCreateUser();

  const onClickJoin = async (data: IData): Promise<void> => {
    if (!isVerify) {
      setErrors("이메일 인증이 필요합니다.");
      return;
    }
    const result = await createUser({
      variables: {
        createUserInput: {
          nickname: data.name,
          email: data.email,
          password: data.password,
        },
      },
    });
    alert("회원가입 되었습니다.");
  };

  return {
    onClickJoin,
  };
};
