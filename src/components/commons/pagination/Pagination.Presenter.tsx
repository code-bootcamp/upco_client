import { PaginationPage } from "./Pagination.styles";
import { MouseEvent } from "react";
export interface IPaginationsUIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export default function PaginationUI(props: IPaginationsUIProps): JSX.Element {
  return (
    <div>
      <PaginationPage onClick={props.onClickPrevPage}>{`<`}</PaginationPage>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <PaginationPage
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activePage}
            >
              {props.startPage + index}
            </PaginationPage>
          )
      )}
      <PaginationPage onClick={props.onClickNextPage}>{`>`}</PaginationPage>
    </div>
  );
}
