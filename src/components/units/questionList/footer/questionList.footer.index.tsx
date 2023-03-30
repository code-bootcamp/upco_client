import * as S from "./questionList.footer.styles";
import { IQuestionListFooterProps } from "./questionList.footer.types";

export default function QuestionListFooter(props: IQuestionListFooterProps): JSX.Element {
  console.log(props.page === props.targetPage, "트루!");

  return (
    <S.Wrapper>
      <button onClick={props.onClickLeftArrow} disabled={props.starPage === 0 ? true : false}>
        <S.ArrowLeft />
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.lastPage &&
          props.starPage + index + 1 <= props.lastPage && (
            <S.Number
              key={index}
              id={String(index + props.starPage)}
              isActive={props.starPage + index === props.targetPage}
              onClick={props.onClickPageNumber}
            >
              {index + props.starPage + 1}
            </S.Number>
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
