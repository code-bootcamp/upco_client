import { MouseEvent, useState } from "react";
import { FetchQuestionsSlice } from "../../../commons/hooks/customs/fetchQuestionsSlice";
import QuestionListFooter from "../footer/questionList.footer.index";
import * as S from "./questionList.body.styles";

export default function QuestionListBody(): JSX.Element {
  const fetchQuestions = FetchQuestionsSlice();

  const [page, setPage] = useState(0);
  const [starPage, setStartPage] = useState(1);
  const lastPage = fetchQuestions?.length;

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    setPage(Number(event.currentTarget.id));
  };

  const onClickLeftArrow = (): void => {
    setStartPage(starPage - 10);
    setPage(starPage - 10);
  };

  const onClickRightArrow = (): void => {
    setStartPage(starPage + 10);
    setPage(starPage + 10);
  };
  console.log(page, starPage);
  return (
    <>
      <S.Wrapper>
        <S.Title>문의내역</S.Title>
        {fetchQuestions?.[page]?.map((el, index) => (
          <S.ContentsBox key={el.id}>
            <S.TextBox>
              <S.ContentsTitle>{el.title}</S.ContentsTitle>
              <S.Contents>{el.contents}</S.Contents>
            </S.TextBox>
            <S.CreateAt>{el.createAt}</S.CreateAt>
          </S.ContentsBox>
        ))}
        <QuestionListFooter
          page={page}
          starPage={starPage}
          lastPage={lastPage}
          setPage={setPage}
          onClickPageNumber={onClickPageNumber}
          onClickLeftArrow={onClickLeftArrow}
          onClickRightArrow={onClickRightArrow}
        />
      </S.Wrapper>
    </>
  );
}
