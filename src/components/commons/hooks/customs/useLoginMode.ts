import { NextRouter, useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FormValues } from "../../items/modal/login/login.types";
import {
  accessTokenState,
  isFindState,
  isJoinState,
  isLoginState,
  showModalState,
} from "../../stores";
import { useMutationLogin } from "../mutation/useMutationLogin";

export const useLoginMode = (): {
  onSubmit: (data: FormValues) => Promise<void>;
} => {
  const [_, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutationLogin();
  const router: NextRouter = useRouter();
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [isOpen, setIsOpen] = useRecoilState(isLoginState);
  const [isJoin, setIsJoin] = useRecoilState(isJoinState);
  const [isFind, setIsFind] = useRecoilState(isFindState);

  const onSubmit = async (data: FormValues): Promise<void> => {
    const { email, password } = data;
    const result = await login({ variables: { email, password } });

    const accessToken = result.data.login;

    if (accessToken === undefined) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요!");
      return;
    }
    setAccessToken(accessToken);

    setShowModal(true);
    setIsOpen(false);
  };

  return { onSubmit };
};
