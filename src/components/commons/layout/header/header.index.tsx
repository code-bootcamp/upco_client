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
          <img src="/images/layout/logo.svg" alt="로고" />
        </div>
        <S.MenuBox>
          <li>
            <S.MapIcon />
            <Link href="#">
              <a>지도</a>
            </Link>
          </li>
          <li>
            <S.MessageIcon />
            <Link href="#">
              <a>채팅</a>
            </Link>
          </li>
          <li>
            <S.FriendListIcon />
            <Link href="#">
              <a>친구</a>
            </Link>
          </li>
        </S.MenuBox>
        <S.UserBox>
          <div onClick={onClickLogin}>
            <S.UserIcon />
          </div>
        </S.UserBox>
      </S.Wrapper>
      <S.DivideLine />
    </>
  );
}
