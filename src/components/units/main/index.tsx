import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationInitialMode } from "../../commons/hooks/customs/useLocationInitialMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSaveMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useMutationLocation } from "../../commons/hooks/mutation/useMutationLocation";
import { locationState } from "../../commons/stores";
import MainBody from "./body/main.body.index";
import MainFooter from "./footer/main.footer.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>();
  const [location] = useRecoilState(locationState);
  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const [locations] = useMutationLocation();
  // const { useLocation } = useLocationMode();
  const { locationSaveFn, result } = useLocationSaveMode();
  const { useLocationInitialSave } = useLocationInitialMode();
  const data = result.data;
  // useLocationInitialSave();
  geolocationFn();
  mapCreation();
  // useLocation();
  console.log("리렌더링 되는중");
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
