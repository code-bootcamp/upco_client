import { NextRouter, useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FormValues } from "../../items/modal/login/login.types";
import { accessTokenState } from "../../stores";
import { useMutationLogin } from "../mutation/useMutationLogin";
import { Modal } from "antd";

export const useLoginMode = (): {
  onSubmit: (data: FormValues) => Promise<void>;
} => {
  const [_, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutationLogin();
  const router: NextRouter = useRouter();

  const onSubmit = async (data: FormValues): Promise<void> => {
    const { email, password } = data;
    const result = await login({ variables: { email, password } });

    const accessToken = result.data.login;

    if (accessToken === undefined) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요!");
      return;
    }

    setAccessToken(accessToken);

    // localStorage.setItem("accessToken", accessToken); // 임시 사용 보안상 좋지 않으므로! 나중에 지울 예정!

    // Modal("로그인 되었습니다");
    alert("로그인되었습니다.");

    if ("/".includes(router.asPath)) {
      router.push("/main");
    }
  };

  return { onSubmit };
};
