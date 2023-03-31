import * as S from "./home.body.styles";

export default function HomeBody(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Title>
            <h4>엎</h4>
            어지면
            <h4>코</h4>
            닿는 거리에서 만나는 사람들,
            <S.Logo src="/images/layout/logo01.svg" />
          </S.Title>
          <S.ButtonBox>
            <button>시작하기</button>
          </S.ButtonBox>
        </div>
      </S.Wrapper>
    </>
  );
}
