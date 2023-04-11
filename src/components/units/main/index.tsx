import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationInitialMode } from "../../commons/hooks/customs/useLocationInitialMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSaveMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useMutationLocation } from "../../commons/hooks/mutation/useMutationLocation";
import { useQueryFindAroundUsers } from "../../commons/hooks/queries/useQueryFindAroundUsers";
import { locationState } from "../../commons/stores";
import MainBody from "./body/main.body.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>();
  const [location] = useRecoilState(locationState);
  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const [locations] = useMutationLocation();
  const { locationSaveFn } = useLocationSaveMode();
  const { useLocationInitialSave } = useLocationInitialMode();
  const result = useQueryFindAroundUsers();
  // const data = result;
  useLocationInitialSave();
  geolocationFn();
  mapCreation();

  console.log("현재 내 위치", position);
  console.log("유저 위치 데이터", result.data);

  const useLocation = (): void => {
    useEffect(() => {
      if (position?.coords) {
        const interval = setInterval(() => {
          const result = locations({
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
      }
    }, []);
  };

  useLocation();

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
