import { useState } from "react";
import { useRecoilState } from "recoil";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationInitialMode } from "../../commons/hooks/customs/useLocationInitialMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSaveMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { locationState } from "../../commons/stores";
import MainBody from "./body/main.body.index";
import MainFooter from "./footer/main.footer.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>();
  const [location] = useRecoilState(locationState);

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const { useLocation } = useLocationMode();
  const { locationSaveFn, result } = useLocationSaveMode();
  const { useLocationInitialSave } = useLocationInitialMode();

  const data = result.data;

  useLocationInitialSave();
  geolocationFn();
  mapCreation();
  useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && (
        <MainBody
          locationSaveFn={locationSaveFn}
          data={data}
          location={location}
          position={position}
          setLevel={setLevel}
        ></MainBody>
      )}
      <MainFooter data={data} />
    </div>
  );
}
