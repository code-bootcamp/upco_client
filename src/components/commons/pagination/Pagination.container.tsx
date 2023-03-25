import { useState } from "react";
import type { MouseEvent } from "react";
import PaginationUI from "./Pagination.Presenter";
// import {  } from "../../../commons/types/generated/types";
interface IPaginationProps {
  count?: number;
  // refetch: (
  //   variables?: Partial<IQueryFetchBoardsArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    // void props.refetch({ page: activePage });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    // void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      // void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
