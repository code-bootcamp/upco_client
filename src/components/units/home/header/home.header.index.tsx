import * as S from "./home.header.styles";
import Link from "next/link";

export default function HomeHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <a>
            <img src="/images/layout/logo01.svg" />
          </a>
        </Link>
        <button>회원가입</button>
      </S.Wrapper>
    </>
  );
}
