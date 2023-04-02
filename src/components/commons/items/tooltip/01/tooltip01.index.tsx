import * as S from "./tooltip01.styles";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/router";
import { RiCustomerServiceLine } from "react-icons/ri";
import { useMutationLogout } from "../../../hooks/mutation/useMutationLogout";

export default function TooltipUI(): JSX.Element {
  const router = useRouter();

  const [logout] = useMutationLogout();

  const onClickMoveToPage = (path: string) => async () => {
    await router.push(path);
  };

  const onClickLogout = async (): Promise<void> => {
    await logout();
    alert("로그아웃 되었습니다.");
    void router.push("/");
  };
  return (
    <>
      <S.Wrapper>
        <S.RoomWrapper>
          <BsGear></BsGear>
          <div onClick={onClickMoveToPage("/profile")}>내 정보</div>
        </S.RoomWrapper>
        <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <RiCustomerServiceLine></RiCustomerServiceLine>
          <div onClick={onClickMoveToPage("/notice")}>고객센터</div>
        </S.RoomWrapper>
        <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <RxExit></RxExit>
          <div onClick={onClickLogout}>로그아웃</div>
        </S.RoomWrapper>
      </S.Wrapper>
    </>
  );
}
