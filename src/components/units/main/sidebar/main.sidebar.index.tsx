import { FiX } from "react-icons/fi";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { useMutationLogout } from "../../../commons/hooks/mutation/useMutationLogout";
import { SubWrapper } from "../footer/main.footer.styles";
import * as S from "./main.sidebar.styels";

export default function MainSideBar(props): JSX.Element {
  const { onClickMovePage } = movePageMode();

  const [logout] = useMutationLogout();

  const onClickLogout = async (): Promise<void> => {
    await logout();
    alert("로그아웃 되었습니다.");
    onClickMovePage("/");
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.FixStyled onClick={props.onClickIsOpen}></S.FixStyled>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ImgWrapper>
          <S.ImgBox src=""></S.ImgBox>
        </S.ImgWrapper>
        <S.TextWrapper>
          <p>문성진</p>
          <p>20대</p>
        </S.TextWrapper>
        <S.TextWrapper>
          <p>eggmun98@gmail.com</p>
        </S.TextWrapper>
      </S.BottomWrapper>
      <S.ModeWrapper>
        <S.ModeBox>이미지 변경</S.ModeBox>
        <S.ModeBox onClick={onClickMovePage("/profile")}>내 정보</S.ModeBox>
        <S.ModeBox onClick={onClickMovePage("/notice")}>고객 센터</S.ModeBox>
        <S.ModeBox onClick={onClickLogout}>로그 아웃</S.ModeBox>
      </S.ModeWrapper>
    </S.Wrapper>
  );
}
