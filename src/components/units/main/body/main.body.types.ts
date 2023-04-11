import { QueryResult } from "@apollo/client";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../../commons/types/generated/types";

interface IData {
  lng: number;
  lat: number;
  id: string;
}

export interface IProps {
  // data: { findAroundUsers: IData[] };
  // data: Pick<IQuery, "findAroundUsers"> | undefined;
  // data: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
  result: QueryResult<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>;
  locationSaveFn: (map: any) => void;
  location: { sw: string; ne: string } | undefined;
  position: GeolocationPosition | null;
  setLevel: React.Dispatch<React.SetStateAction<number | undefined>>;
}
