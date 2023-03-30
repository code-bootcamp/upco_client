import { useQueryFetchQuestion } from "../../../commons/hooks/queries/useQueryFetchQuestion";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./questionDetail.body.styles";
import { useOnClickDeleteQuestion } from "../../../commons/hooks/customs/useOnClickDeleteQuestion";

export default function QuestionDetailBody(): JSX.Element {
  const { data } = useQueryFetchQuestion();
  const { onClickDeleteQuestion } = useOnClickDeleteQuestion();

  return (
    <>
      <S.Wrapper>
        <S.Title>
          <li>
            <h4>{data?.fetchQuestion.title}</h4>
            <p>{getDate(data?.fetchQuestion.createAt)}</p>
          </li>
          <li>
            <button onClick={onClickDeleteQuestion}>문의 삭제</button>
          </li>
        </S.Title>
        <S.ContentsWrapper>
          <p>{data?.fetchQuestion.contents}</p>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
