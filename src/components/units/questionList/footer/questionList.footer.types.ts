import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IQuestionListFooterProps {
  page: number;
  starPage: number;
  targetPage: number;
  lastPage: number | undefined;
  onClickPageNumber: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickLeftArrow: () => void;
  onClickRightArrow: () => void;
}
