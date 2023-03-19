import { useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import MainBody from "./body/main.body.index";
import MainSideBar from "./sidebar/main.sidebar.index";

export default function MainPage(): JSX.Element {
  const [state, setState] = useState();
  const [isFollower, setIsFollower] = useState(false);
  const [isTitle, setIsTitle] = useState(true);

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();

  geolocationFn();
  mapCreation();
  const followerOpen = () => {
    setIsFollower((prev) => !prev);
  };

  const titleMove = (move) => () => {
    setIsTitle(move);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && <MainBody state={state} setState={setState} position={position}></MainBody>}
      <MainSideBar
        isFollower={isFollower}
        followerOpen={followerOpen}
        titleMove={titleMove}
        isTitle={isTitle}
      ></MainSideBar>
    </div>
  );
}
