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
        console.log("hooks패턴에서 포지션", position);
        console.log("내 위치 서버에 보냈습니다.", results);
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
