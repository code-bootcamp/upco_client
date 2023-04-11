import { debounce } from "lodash";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../../stores";
import { useQueryFindAroundUsers } from "../queries/useQueryFindAroundUsers";

export const useLocationSaveMode = (): {
  locationSaveFn: (map: any) => void;
} => {
  const [_, setLocation] = useRecoilState(locationState);

  const result = useQueryFindAroundUsers();

  const locationSaveFn = useCallback(
    debounce((map) => {
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
