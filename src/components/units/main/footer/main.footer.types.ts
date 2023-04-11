import { IQuery } from "../../../../commons/types/generated/types";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  data: Pick<IQuery, "findAroundUsers">;
}
