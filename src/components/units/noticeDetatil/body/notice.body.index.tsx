import * as S from "./notice.body.styles";

export default function NoticeDetailBody(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <li>
            <h4>공지사항 제목</h4>
            <p>??번</p>
          </li>
        </S.Title>
        <S.ContentsWrapper>
          <p>공지사항 내용</p>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
