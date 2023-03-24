import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginUI from "../../items/modal/login/login.index";
import TooltipUI from "../../items/tooltip/tooltip01.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);

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
          </S.MenuBox>
          <S.UserBox onClick={onClickLogin} style={{ position: "relative" }}>
            <TooltipUI></TooltipUI>
            <S.UserIcon />
          </S.UserBox>
        </div>
      </S.Wrapper>
    </>
  );
}
