import { useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import MainBody from "./body/main.body.index";
import MainFooter from "./footer/main.footer.index";

export default function MainPage(): JSX.Element {
  const [state, setState] = useState();
  const [level, setLevel] = useState();

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();

  geolocationFn();
  mapCreation();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && (
        <MainBody
          state={state}
          setState={setState}
          position={position}
          setLevel={setLevel}
        ></MainBody>
      )}
      <MainFooter />
    </div>
  );
}
