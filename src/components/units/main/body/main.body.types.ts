import { QueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
  IQueryFindAroundUsersArgs,
} from "../../../../commons/types/generated/types";

export interface IProps {
  data: Pick<IQuery, "fetchLoginUser"> | undefined;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
  locationSaveFn: (map: any) => void;
  location: { sw: string; ne: string } | undefined;
  position: GeolocationPosition | null;
  setLevel: React.Dispatch<React.SetStateAction<number | undefined>>;
}
