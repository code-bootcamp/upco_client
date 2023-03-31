import { useEffect, useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSavemode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import MainBody from "./body/main.body.index";
import MainFooter from "./footer/main.footer.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>();

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const { useLocation } = useLocationMode();
  const { locationSaveFn, location, setLocation, result } = useLocationSaveMode();

  const data = result.data;

  useEffect(() => {
    setLocation({
      sw: "(33.4285069646562, 125.68688963167956)",
      ne: "(37.554563460104845, 131.09273396035258)",
    });
  }, []);

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
          setLocation={setLocation}
          position={position}
          setLevel={setLevel}
        ></MainBody>
      )}
      <MainFooter data={data} />
    </div>
  );
}
