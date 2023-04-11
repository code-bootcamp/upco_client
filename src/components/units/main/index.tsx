import { useState } from "react";
import { useRecoilState } from "recoil";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationInitialMode } from "../../commons/hooks/customs/useLocationInitialMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSaveMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useQueryFindAroundUsers } from "../../commons/hooks/queries/useQueryFindAroundUsers";
import { locationState, positionState } from "../../commons/stores";
import MainBody from "./body/main.body.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>();
  const [location] = useRecoilState(locationState);
  const [position] = useRecoilState(positionState);

  const { isOpen, mapCreation } = useMapCreationMode();
  const { geolocationFn } = useGeolocationMode();
  const { locationSaveFn } = useLocationSaveMode();
  const { useLocationInitialSave } = useLocationInitialMode();
  const { useLocation } = useLocationMode();

  const result = useQueryFindAroundUsers();

  useLocationInitialSave();
  geolocationFn();
  mapCreation();
  useLocation();

  console.log("현재 내 위치", position?.coords.latitude);
  console.log("유저 위치 데이터", result.data);

  return (
    <>
      {isOpen && (
        <>
          <MainBody
            locationSaveFn={locationSaveFn}
            result={result}
            location={location}
            position={position}
            setLevel={setLevel}
          ></MainBody>
        </>
      )}
    </>
  );
}
