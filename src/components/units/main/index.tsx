import { useState } from "react";
import { mapCreationMode } from "../../commons/hooks/customs/mapCreationMode";
import MapBody from "./body/main.body.index";

export default function MainPage(): JSX.Element {
  const [state, setState] = useState();
  const { isOpen, mapCreation } = mapCreationMode();
  mapCreation();

  return <>{isOpen && <MapBody state={state} setState={setState}></MapBody>}</>;
}
