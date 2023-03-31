import { useQuery } from "@apollo/client";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { FIND_AROUND_USERS } from "../queries/useQueryFindAroundUsers";

export const useLocationSaveMode = () => {
  const [location, setLocation] = useState<{
    sw: string;
    ne: string;
  }>({
    sw: "",
    ne: "",
  });

  const result = useQuery(FIND_AROUND_USERS, {
    variables: {
      bothLocation: {
        lat1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[0]),
        lng1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[1]),
        lat2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[0]),
        lng2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[1]),
      },
    },
  });

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
    location,
    setLocation,
    result,
  };
};
