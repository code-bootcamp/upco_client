import * as S from "./home.header.styles";
import Link from "next/link";

interface IHomeHeaderProps {
  onClickOpen: (open: string) => () => void;
}

export default function HomeHeader(props: IHomeHeaderProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <a>
            <img src="/images/layout/logo01.svg" />
          </a>
        </Link>
        <button onClick={props.onClickOpen("join")}>회원가입</button>
      </S.Wrapper>
    </>
  );
}
