import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginUI from "../../items/modal/login/login.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  console.log(router);
  const onClickLogin = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} />}
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
            <Link href="/friend">
              <div className={router.pathname === "/friend" ? "selected" : ""}>
                <S.FriendListIcon />
                <a>친구</a>
              </div>
            </Link>
          </S.MenuBox>
          <S.UserBox onClick={onClickLogin}>
            <S.UserIcon />
          </S.UserBox>
        </div>
      </S.Wrapper>
    </>
  );
}
