import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IQuestionListFooterProps {
  page: number;
  starPage: number;
  lastPage: number | undefined;
  setPage: Dispatch<SetStateAction<number>>;
  onClickPageNumber: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickLeftArrow: () => void;
  onClickRightArrow: () => void;
}
