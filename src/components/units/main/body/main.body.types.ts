import { SetStateAction } from "react";
import { IQuery, IQueryFindAroundUsersArgs } from "../../../../commons/types/generated/types";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  // data: {
  //   findAroundUsers: IData[];
  // };
  // data: {
  //   findAroundUsers: IData[];
  // };
  data: Pick<IQuery, "findAroundUsers">;
  locationSaveFn: (map: any) => void;
  // location: { sw: string; ne: string } | undefined;
  position: GeolocationPosition | null;
  setLevel: React.Dispatch<React.SetStateAction<number | undefined>>;
}
