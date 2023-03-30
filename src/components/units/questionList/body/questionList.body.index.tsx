import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FetchQuestionsSlice } from "../../../commons/hooks/customs/fetchQuestionsSlice";
import QuestionListFooter from "../footer/questionList.footer.index";
import * as S from "./questionList.body.styles";

export default function QuestionListBody(): JSX.Element {
  const fetchQuestions = FetchQuestionsSlice();

  const [page, setPage] = useState(0);
  const [starPage, setStartPage] = useState(0);
  const [targetPage, setTargetPage] = useState(0);
  const lastPage = fetchQuestions?.length;

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    const targetPage = Number(event.currentTarget.id);
    setPage(targetPage);
    setTargetPage(targetPage);
  };

  const onClickLeftArrow = (): void => {
    setStartPage(starPage - 10);
    setPage(starPage - 10);
    setTargetPage(starPage - 10);
  };

  const onClickRightArrow = (): void => {
    setStartPage(starPage + 10);
    setPage(starPage + 10);
    setTargetPage(starPage + 10);
  };

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
            <QuestionListFooter
              page={page}
              starPage={starPage}
              targetPage={targetPage}
              lastPage={lastPage}
              onClickPageNumber={onClickPageNumber}
              onClickLeftArrow={onClickLeftArrow}
              onClickRightArrow={onClickRightArrow}
            />
          </>
        ) : (
          <S.NoneBox>문의내역이 없습니다.</S.NoneBox>
        )}
      </S.Wrapper>
    </>
  );
}
