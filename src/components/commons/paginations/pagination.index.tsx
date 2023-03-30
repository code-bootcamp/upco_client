import { MouseEvent, useState } from "react";
import * as S from "./pagination.styles";
import { IPaginationProps } from "./pagination.types";

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(0);
  const [targetPage, setTargetPage] = useState(0);
  const lastPage = props.data?.length;

  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    const targetPage = Number(event.currentTarget.id);
    props.setPage(targetPage);
    setTargetPage(targetPage);
  };

  const onClickLeftArrow = (): void => {
    setStartPage(startPage - 10);
    props.setPage(startPage - 10);
    setTargetPage(startPage - 10);
  };

  const onClickRightArrow = (): void => {
    setStartPage(startPage + 10);
    props.setPage(startPage + 10);
    setTargetPage(startPage + 10);
  };
  return (
    <S.Wrapper>
      <button onClick={onClickLeftArrow} disabled={startPage === 0 ? true : false}>
        <S.ArrowLeft />
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          lastPage &&
          startPage + index + 1 <= lastPage && (
            <S.Number
              key={index}
              id={String(index + startPage)}
              isActive={startPage + index === targetPage}
              onClick={onClickPageNumber}
            >
              {index + startPage + 1}
            </S.Number>
          )
      )}
      <button
        onClick={onClickRightArrow}
        disabled={lastPage && startPage + 10 <= lastPage ? false : true}
      >
        <S.ArrowRight />
      </button>
    </S.Wrapper>
  );
}
