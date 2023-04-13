import { QueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
  IQueryFindAroundUsersArgs,
} from "../../../../commons/types/generated/types";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
}
