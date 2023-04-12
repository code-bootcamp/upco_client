import { useMutationLogout } from "../mutation/useMutationLogout";
import { movePageMode } from "./movePageMode";

export const onClickLogoutMode = (): {
  onClickLogout: () => Promise<void>;
} => {
  const { onClickMovePage } = movePageMode();
  const [logout] = useMutationLogout();

  const onClickLogout = async (): Promise<void> => {
    await logout();
    alert("로그아웃 되었습니다.");
    onClickMovePage("/");
  };

  return {
    onClickLogout,
  };
};
