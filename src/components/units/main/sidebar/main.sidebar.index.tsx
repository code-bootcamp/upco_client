import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import * as S from "./main.sidebar.styels";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import { IProps } from "./main.sidebar.types";
import { onClickLogoutMode } from "../../../commons/hooks/customs/onClickLogoutMode";

export default function MainSideBar(props: IProps): JSX.Element {
  const { data } = useQueryFetchLoginUser();
  const { onClickMovePage } = movePageMode();
  const { onClickLogout } = onClickLogoutMode();

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.FixStyled onClick={props.onClickIsOpen}></S.FixStyled>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ImgWrapper>
          <S.ImgBox
            src={`https://storage.cloud.google.com/upco-bucket${
              data?.fetchLoginUser?.image as string
            }`}
          ></S.ImgBox>
        </S.ImgWrapper>
        <S.TextWrapper>
          <li>
            <h4>{data?.fetchLoginUser.nickname}</h4>
            <p>{data?.fetchLoginUser.age}</p>
          </li>
          <li>
            <p>{data?.fetchLoginUser.email}</p>
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
