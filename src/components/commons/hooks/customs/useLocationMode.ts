import { useEffect } from "react";
import { useMutationLocation } from "../mutation/useMutationLocation";
import { useGeolocationMode } from "./useGeolocationMode";

export const useLocationMode = (): {
  useLocation: () => void;
} => {
  const { position } = useGeolocationMode();
  const [location] = useMutationLocation();

  const useLocation = (): void => {
    useEffect(() => {
      const interval = setInterval(() => {
        const result = location({
          variables: {
            location: {
              lat: position?.coords.latitude ?? 36.4455,
              lng: position?.coords.longitude ?? 126.12321,
            },
          },
        });
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }, []);
  };
  return {
    useLocation,
  };
};
