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
  console.log("영역좌표", location);
  console.log("상대방 위치", data);
  useLocationInitialSave();
  geolocationFn();
  mapCreation();
  const useLocation = (): void => {
    console.log(" 현재 위치를 보냈음", typeof position?.coords.longitude);
    useEffect(() => {
      const interval = setInterval(() => {
        const result = locations({
          variables: {
            location: {
              lat: position?.coords.latitude ?? 37.4847446,
              lng: position?.coords.longitude ?? 126.8965738,
            },
          },
        });
        console.log("내 위치 보냈음", result);
      }, 10000);
      return () => {
        clearInterval(interval);
      };
    }, []);
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
