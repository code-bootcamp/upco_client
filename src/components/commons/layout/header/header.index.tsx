import Link from "next/link";
import { useState } from "react";
import LoginUI from "../../items/modal/login/login.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
              <div>
                <S.MapIcon />
                <a>지도</a>
              </div>
            </Link>
            <Link href="/chat">
              <div>
                <S.MessageIcon />
                <a>채팅</a>
              </div>
            </Link>
            <Link href="/main">
              <div>
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
      <S.DivideLine />
    </>
  );
}
