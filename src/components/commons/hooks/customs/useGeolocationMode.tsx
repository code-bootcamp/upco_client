import { useEffect, useState } from "react";

export const useGeolocationMode = () => {
  const [position, setPosition] = useState(null);

  const geolocationFn = () => {
    useEffect(() => {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          setPosition(position);
          console.log(position);
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
