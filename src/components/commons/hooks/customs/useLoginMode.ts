import { useRecoilState } from "recoil";
import { FormValues } from "../../items/modal/login/login.types";
import { accessTokenState, isLoginState, showModalState } from "../../stores";
import { useMutationLogin } from "../mutation/useMutationLogin";

export const useLoginMode = (): {
  onSubmit: (data: FormValues) => Promise<void>;
} => {
  const [_, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutationLogin();
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [isOpen, setIsOpen] = useRecoilState(isLoginState);

  const onSubmit = async (data: FormValues): Promise<void> => {
    const result = await login({
      variables: { email: String(data.email), password: String(data.password) },
    });

    const accessToken = result?.data?.login;

    if (accessToken === undefined) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요!");
      return;
    }
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken); // 임시
    setShowModal(true);
    setIsOpen(false);
  };

  return { onSubmit };
};
