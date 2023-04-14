import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { positionState } from "../../stores";

export const useGeolocationMode = (): {
  geolocationFn: () => void;
} => {
  const [_, setPosition] = useRecoilState<GeolocationPosition | null>(positionState);
  const geolocationFn = (): void => {
    useEffect(() => {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          setPosition(position);
        },

        (error) => {
          alert(error);
        },
        { enableHighAccuracy: true }
      );
      return () => {
        navigator.geolocation.clearWatch(watcher);
      };
    }, []);
  };

  return {
    geolocationFn,
  };
};
