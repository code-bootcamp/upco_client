import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryFetchLoginUser } from "../../hooks/queries/fetchLoginUser";
import FindUI from "../../items/modal/find/find.index";
import JoinUI from "../../items/modal/join/join.index";
import LoginUI from "../../items/modal/login/login.index";
import TooltipUI from "../../items/tooltip/01/tooltip01.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);
  const { data } = useQueryFetchLoginUser();
  const [isJoin, setIsJoin] = useState(false);
  const [isFind, setIsFind] = useState(false);

  const onClickOpen = (open: string) => (): void => {
    if (open === "login") {
      setIsOpen((prev) => !prev);
    } else if (open === "join") {
      setIsJoin((prev) => !prev);
    }
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} setIsJoin={setIsJoin} setIsFind={setIsFind} />}
      {isJoin && <JoinUI setIsJoin={setIsJoin} setIsOpen={setIsOpen} />}
      {isFind && <FindUI setIsOpen={setIsOpen} setIsFind={setIsFind}></FindUI>}

      <S.Wrapper>
        <div>
          <S.Logo src="/images/layout/logo.svg" />
          <S.MenuBox>
            <Link href="/main">
              <div className={router.pathname === "/main" ? "selected" : ""}>
                <S.MapIcon />
                <a>지도</a>
              </div>
            </Link>
            <Link href="/chat">
              <div className={router.pathname === "/chat" ? "selected" : ""}>
                <S.MessageIcon />
                <a>채팅</a>
              </div>
            </Link>
          </S.MenuBox>
          {data?.fetchLoginUser ? (
            <S.UserBox style={{ position: "relative" }}>
              {isTooltip && <TooltipUI></TooltipUI>}
              <S.UserIcon onClick={onClickOpen("")} />
            </S.UserBox>
          ) : (
            <div>
              <S.LoginButton onClick={onClickOpen("join")}>회원가입</S.LoginButton>
              <S.LoginButton onClick={onClickOpen("login")}>로그인</S.LoginButton>
            </div>
          )}
        </div>
      </S.Wrapper>
    </>
  );
}
