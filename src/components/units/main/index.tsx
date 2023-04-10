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
  useLocationInitialSave();
  geolocationFn();
  mapCreation();
  const useLocation = (): void => {
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
