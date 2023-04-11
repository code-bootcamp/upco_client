import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../getAccessToken";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const accessToken = await getAccessToken();
      if (accessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/");
      }
    })();
  }, []);
};
