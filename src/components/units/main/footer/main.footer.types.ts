import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../../commons/types/generated/types";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  // data: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
}
