import * as S from "./tooltip01.styles";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/router";
import { RiCustomerServiceLine } from "react-icons/ri";

export default function TooltipUI(): JSX.Element {
  const router = useRouter();
  const onClickMoveToPage = (path: string) => async () => {
    await router.push(path);
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
          <div>로그아웃</div>
        </S.RoomWrapper>
      </S.Wrapper>
    </>
  );
}
