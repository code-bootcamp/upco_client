import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../commons/types/generated/types";

export interface LocationData {
  _id: string;
  name: string;
  images: string;
  age: string;
  interest: string[];
}

export interface IProps {
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
}
