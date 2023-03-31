import { useQueryFetchQuestion } from "../../../commons/hooks/queries/useQueryFetchQuestion";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./notice.body.styles";
import { useOnClickDeleteQuestion } from "../../../commons/hooks/customs/useOnClickDeleteQuestion";

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
