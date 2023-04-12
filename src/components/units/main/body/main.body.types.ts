import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../../commons/types/generated/types";

export interface IProps {
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
  locationSaveFn: (map: any) => void;
  location: { sw: string; ne: string } | undefined;
  position: GeolocationPosition | null;
  setLevel: React.Dispatch<React.SetStateAction<number | undefined>>;
}
