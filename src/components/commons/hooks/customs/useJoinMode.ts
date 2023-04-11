import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
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
  onClickJoin: SubmitHandler<FieldValues>;
} => {
  const [createUser] = useMutationCreateUser();
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [isJoin, setIsJoin] = useRecoilState(isJoinState);

  const onClickJoin: SubmitHandler<FieldValues> = async (data) => {
    if (!isVerify) {
      setErrors("이메일 인증이 필요합니다.");
      return;
    }
    await createUser({
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
