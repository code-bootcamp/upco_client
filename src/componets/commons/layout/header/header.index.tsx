import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <img src="/images/layout/logo.svg" alt="로고" />
        <div></div>
      </S.Wrapper>
      <S.DvideLine />
    </>
  );
}
