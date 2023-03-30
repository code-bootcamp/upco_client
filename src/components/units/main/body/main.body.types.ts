import { SetStateAction } from "react";

interface IData {
  id: string;
  lat: number;
  lng: number;
}

export interface IProps {
  data: {
    findAroundUsers: IData[];
  };
  debouncedHandler: (map: any) => void;
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
