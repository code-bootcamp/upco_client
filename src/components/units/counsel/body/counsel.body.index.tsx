import * as S from "./counsel.body.styles";

export default function CounselBody(): JSX.Element {
  return (
    <S.Wrapper>
      <S.BodyRow>
        <S.Label>이메일</S.Label>
        <S.CounselEmail>eggmun98@gmail.com</S.CounselEmail>
      </S.BodyRow>
      <S.BodyRow>
        <S.Label>문의 제목</S.Label>
        <S.CounselTitle type="text" />
      </S.BodyRow>
      <S.BodyRow>
        <S.Label>문의 내용</S.Label>
        <S.CounselContents />
      </S.BodyRow>
    </S.Wrapper>
  );
}
