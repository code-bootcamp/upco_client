import { debounce } from "lodash";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../../stores";

type MapType = kakao.maps.Map;

export const useLocationSaveMode = (): {
  locationSaveFn: (map: MapType) => void;
} => {
  const [_, setLocation] = useRecoilState(locationState);

  const locationSaveFn = useCallback(
    debounce((map: MapType) => {
      setLocation({
        sw: map.getBounds().getSouthWest().toString(),
        ne: map.getBounds().getNorthEast().toString(),
      });
    }, 500),
    []
  );

  return {
    locationSaveFn,
  };
};
