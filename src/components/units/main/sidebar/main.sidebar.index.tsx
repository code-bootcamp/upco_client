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
          <li>
            <h4>문성진</h4>
            <p>20대</p>
          </li>
          <li>
            <p>eggmun98@gmail.com</p>
          </li>
        </S.TextWrapper>
      </S.BottomWrapper>
      <S.ModeWrapper>
        <li>
          <button>친구요청</button>
        </li>
        <li onClick={onClickMovePage("/profile")}>
          <button>내 정보</button>
        </li>
        <li>
          <button>이미지 변경</button>
        </li>
        <li onClick={onClickMovePage("/notice")}>
          <button>고객 센터</button>
          <button onClick={onClickLogout}>로그아웃</button>
        </li>
      </S.ModeWrapper>
    </S.Wrapper>
  );
}
