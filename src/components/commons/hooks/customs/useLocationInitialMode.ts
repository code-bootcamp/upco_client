import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../../stores";

export const useLocationInitialMode = (): {
  useLocationInitialSave: () => void;
} => {
  const [_, setLocation] = useRecoilState(locationState);

  const useLocationInitialSave = (): void => {
    useEffect(() => {
      setLocation({
        sw: "(33.4285069646562, 125.68688963167956)",
        ne: "(37.554563460104845, 131.09273396035258)",
      });
    }, []);
  };

  return { useLocationInitialSave };
};
