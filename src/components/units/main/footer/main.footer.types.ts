import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../../commons/types/generated/types";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
}
