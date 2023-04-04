import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { isJoinState, showModalState } from "../../stores";
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
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [isJoin, setIsJoin] = useRecoilState(isJoinState);

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
    setShowModal(true);
    setIsJoin(false);
  };

  return {
    onClickJoin,
  };
};
