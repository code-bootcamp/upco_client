import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./footer.styles";

export default function LayoutFooter(): JSX.Element {
  const router = useRouter();

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
