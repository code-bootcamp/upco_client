import { MouseEvent, useState } from "react";
import * as S from "./pagination.styles";
import { IPaginationProps } from "./pagination.types";

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [starPage, setStartPage] = useState(0);
  const [targetPage, setTargetPage] = useState(0);
  const lastPage = props.data?.length;

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    const targetPage = Number(event.currentTarget.id);
    props.setPage(targetPage);
    setTargetPage(targetPage);
  };

  const onClickLeftArrow = (): void => {
    setStartPage(starPage - 10);
    props.setPage(starPage - 10);
    setTargetPage(starPage - 10);
  };

  const onClickRightArrow = (): void => {
    setStartPage(starPage + 10);
    props.setPage(starPage + 10);
    setTargetPage(starPage + 10);
  };
  return (
    <S.Wrapper>
      <button onClick={onClickLeftArrow} disabled={starPage === 0 ? true : false}>
        <S.ArrowLeft />
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          lastPage &&
          starPage + index + 1 <= lastPage && (
            <S.Number
              key={index}
              id={String(index + starPage)}
              isActive={starPage + index === targetPage}
              onClick={onClickPageNumber}
            >
              {index + starPage + 1}
            </S.Number>
          )
      )}
      <button
        onClick={onClickRightArrow}
        disabled={lastPage && starPage + 10 <= lastPage ? false : true}
      >
        <S.ArrowRight />
      </button>
    </S.Wrapper>
  );
}
