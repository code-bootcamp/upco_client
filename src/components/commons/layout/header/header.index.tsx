import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { movePageMode } from "../../hooks/customs/movePageMode";
import { useQueryFetchLoginUser } from "../../hooks/queries/fetchLoginUser";
import TooltipUI from "../../items/tooltip/01/tooltip01.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isTooltip, setIsTooltip] = useState(false);
  const { data } = useQueryFetchLoginUser();
  const { onClickMovePage } = movePageMode();

  const onClickOpen = (): void => {
    setIsTooltip((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <div>
          <S.Logo src="/images/layout/logo.svg" onClick={onClickMovePage("/main")} />
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

          <S.UserBox style={{ position: "relative" }}>
            {isTooltip && <TooltipUI />}
            <S.UserIcon onClick={onClickOpen} />
          </S.UserBox>
        </div>
      </S.Wrapper>
    </>
  );
}
