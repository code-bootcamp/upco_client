import { SetStateAction } from "react";

interface IData {
  findAroundUsers: {
    lat: number;
    lng: number;
    id: string;
  };
}

export interface IProps {
  data: IData[];
  location: { sw: string; ne: string } | undefined;
  position: GeolocationPosition | null;
  setLevel: React.Dispatch<React.SetStateAction<number | undefined>>;
  setLocation: React.Dispatch<
    SetStateAction<{
      sw: string;
      ne: string;
    }>
  >;
}
