import * as S from "./home.body.styles";

export default function HomeBody02(): JSX.Element {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <div>동네 친구를 만나보세요.</div>
        <div>근처에 좋은 친구들이 있어요.</div>
      </S.TextWrapper>
      <S.ImgWrapper>
        <img src="/images/home/location.png"></img>{" "}
      </S.ImgWrapper>
    </S.Wrapper>
  );
}
