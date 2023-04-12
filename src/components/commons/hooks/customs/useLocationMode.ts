import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { positionState } from "../../stores";
import { useMutationLocation } from "../mutation/useMutationLocation";
import { useGeolocationMode } from "./useGeolocationMode";

export const useLocationMode = (): {
  useLocation: () => void;
} => {
  const [locations] = useMutationLocation();
  const [position] = useRecoilState(positionState);

  const useLocation = (): void => {
    useEffect(() => {
      if (!position) {
        return;
      }
      const interval = setInterval(() => {
        const results = locations({
          variables: {
            location: {
              lat: position?.coords.latitude,
              lng: position?.coords.longitude,
            },
          },
        });
      }, 10000);
      return () => {
        clearInterval(interval);
      };
    }, [position]);
  };
  return {
    useLocation,
  };
};
