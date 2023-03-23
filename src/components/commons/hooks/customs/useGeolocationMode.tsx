import { useEffect, useState } from "react";
import { useMutationLocation } from "../mutation/useMutationLocation";

export const useGeolocationMode = () => {
  const [position, setPosition] = useState(null);
  const [location] = useMutationLocation();

  const geolocationFn = () => {
    useEffect(() => {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          setPosition(position);
          console.log("현재 위치:", position);

          const result = location({
            variables: {
              location: {
                lat: position?.coords.latitude,
                lng: position?.coords.longitude,
              },
            },
          });
          console.log("유저 위치 보냈음", result);
        },

        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true }
      );
      return () => {
        navigator.geolocation.clearWatch(watcher);
      };
    }, []);
  };

  return {
    position,
    geolocationFn,
  };
};
