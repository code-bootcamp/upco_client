import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { positionState } from "../../stores";
import { useMutationLocation } from "../mutation/useMutationLocation";

export const useLocationMode = (): {
  useLocation: () => void;
} => {
  const [locations] = useMutationLocation(); // 내 위치 저장 뮤테이션
  const [position] = useRecoilState(positionState); // gps로 현재 위치 가져오기

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
