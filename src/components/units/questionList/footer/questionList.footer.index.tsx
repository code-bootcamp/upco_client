import * as S from "./questionList.footer.styles";
import { IQuestionListFooterProps } from "./questionList.footer.types";

export default function QuestionListFooter(props: IQuestionListFooterProps): JSX.Element {
  return (
    <S.Wrapper>
      <button onClick={props.onClickLeftArrow} disabled={props.starPage === 1 ? true : false}>
        <S.ArrowLeft />
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.lastPage &&
          props.starPage + index + 1 <= props.lastPage && (
            <span onClick={props.onClickPageNumber} id={String(index + props.starPage)} key={index}>
              {index + props.starPage}
            </span>
          )
      )}
      <button
        onClick={props.onClickRightArrow}
        disabled={props.lastPage && props.starPage + 10 <= props.lastPage ? false : true}
      >
        <S.ArrowRight />
      </button>
    </S.Wrapper>
  );
}
