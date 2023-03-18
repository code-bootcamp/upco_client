import { useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import MapBody from "./body/main.body.index";

export default function MainPage(): JSX.Element {
  const [state, setState] = useState();
  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  geolocationFn();
  mapCreation();

  return <>{isOpen && <MapBody state={state} setState={setState} position={position}></MapBody>}</>;
}
