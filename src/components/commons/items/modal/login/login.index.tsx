import { useState } from "react";
import AccountInput from "../../inputs/account/account.input.index";
import JoinUI from "../join/join.index";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const [isJoin, setIsJoin] = useState(false);

  const onClickClose = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  const onClickMovedJoin = (): void => {
    setIsJoin((prev) => !prev);
  };

  return (
    <>
      {isJoin ? (
        <JoinUI onClickClose={onClickClose} onClickMovedJoin={onClickMovedJoin} />
      ) : (
        <>
          <S.Background onClick={onClickClose} />
          <S.Wrapper>
            <S.Close onClick={onClickClose} />
            <img src="/images/layout/logo.svg" />
            <S.InputBox>
              <AccountInput placeholder="이메일을 입력해주세요." />
              <div>
                <p>에러메세지</p>
              </div>
            </S.InputBox>
            <S.InputBox>
              <AccountInput type="password" placeholder="비밀번호를 입력해주세요." />
              <div>
                <p>에러메세지</p>
              </div>
            </S.InputBox>
            <button>로그인</button>
            <S.FindBox>
              <p>아이디 찾기</p>
              <p>비밀번호 찾기</p>
            </S.FindBox>
            <S.JoinText>
              <p onClick={onClickMovedJoin}>회원이 아니신가요?</p>
            </S.JoinText>
            <S.DivideLineBox>
              <div></div>
              <span>간편 로그인</span>
              <div></div>
            </S.DivideLineBox>
            <S.IconBox>
              <li>
                <img src="/images/social/google.svg" />
              </li>
              <li>
                <img src="/images/social/naver.svg" />
              </li>
              <li>
                <img src="/images/social/kakao.svg" />
              </li>
            </S.IconBox>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
