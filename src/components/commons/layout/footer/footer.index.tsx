import { debounce } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { movePageMode } from "../../hooks/customs/movePageMode";
import { useQueryFetchLoginUser } from "../../hooks/queries/fetchLoginUser";
import TooltipUI from "../../items/tooltip/01/tooltip01.index";
import { isOpenState } from "../../stores";
import * as S from "./footer.styles";

export default function LayoutFooter(): JSX.Element {
  const router = useRouter();
  const [isTooltip, setIsTooltip] = useState(false);
  const { onClickMovePage } = movePageMode();
  const [windowSize, setWindowSize] = useState("");
  const [isOpen] = useRecoilState(isOpenState);

  const onClickOpen = (): void => {
    setIsTooltip((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <div>
          <>
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
          </>
        </div>
      </S.Wrapper>
    </>
  );
}
