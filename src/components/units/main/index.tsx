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
  const data = result.data;
  console.log("상대방 위치", data);
  useLocationInitialSave();
  geolocationFn();
  mapCreation();
  const useLocation = (): void => {
    console.log(" 현재 위치를 보냈음", position);
    useEffect(() => {
      const interval = setInterval(() => {
        const result = locations({
          variables: {
            location: {
              lat: position?.coords.latitude ?? 36.4455,
              lng: position?.coords.longitude ?? 126.12321,
            },
          },
        });
      }, 20000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    console.log("유저 위치 서버에 보냄", result);
  };

  useLocation();

  return (
    <>
      {isOpen && (
        <>
          <MainBody
            locationSaveFn={locationSaveFn}
            data={data}
            location={location}
            position={position}
            setLevel={setLevel}
          ></MainBody>
        </>
      )}
    </>
  );
}
