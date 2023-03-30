import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FetchQuestionsSlice } from "../../../commons/hooks/customs/fetchQuestionsSlice";
import Pagination from "../../../commons/paginations/pagination.index";
import * as S from "./questionList.body.styles";

export default function QuestionListBody(): JSX.Element {
  const fetchQuestions = FetchQuestionsSlice();
  const [page, setPage] = useState(0);

  return (
    <>
      <S.Wrapper>
        <S.Title>문의내역</S.Title>
        {fetchQuestions && fetchQuestions?.length > 0 ? (
          <>
            <S.ContentsBox>
              {fetchQuestions?.[page]?.map((el) => (
                <S.ContentsList key={el.id}>
                  <S.TextBox>
                    <S.ContentsTitle>{el.title}</S.ContentsTitle>
                    <S.Contents>{el.contents}</S.Contents>
                  </S.TextBox>
                  <S.CreateAt>{getDate(el.createAt)}</S.CreateAt>
                </S.ContentsList>
              ))}
            </S.ContentsBox>
            <Pagination data={fetchQuestions} setPage={setPage} />
          </>
        ) : (
          <S.NoneBox>문의내역이 없습니다.</S.NoneBox>
        )}
      </S.Wrapper>
    </>
  );
}
