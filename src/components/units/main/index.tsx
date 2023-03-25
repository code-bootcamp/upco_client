import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import MainBody from "./body/main.body.index";
import MainFooter from "./footer/main.footer.index";

const FIND_AROUND_USERS = gql`
  query findAroundUsers($bothLocation: FindAroundUserInput!) {
    findAroundUsers(bothLocation: $bothLocation) {
      id
      lat
      lng
      age
      nickname
    }
  }
`;

export default function MainPage(): JSX.Element {
  const [location, setLocation] = useState<{
    sw: string;
    ne: string;
  }>({ sw: "", ne: "" });
  const [level, setLevel] = useState<number>();

  console.log(location, "영역좌ddd 표");

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const { useLocation } = useLocationMode();

  const [locations] = useState({
    sw: location.sw.replace(/\(|\)/g, "").split(", ") ?? "",
    ne: location.ne.replace(/\(|\)/g, "").split(", ") ?? "",
  });

  const { data } = useQuery(FIND_AROUND_USERS, {
    variables: {
      bothLocation: {
        lat1: Number(locations.sw[0]),
        lng1: Number(locations.sw[1]),
        lat2: Number(locations.ne[0]),
        lng2: Number(locations.ne[1]),
      },
    },
  });

  geolocationFn();
  mapCreation();
  useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && (
        <MainBody
          data={data}
          location={location}
          setLocation={setLocation}
          position={position}
          setLevel={setLevel}
        ></MainBody>
      )}
      <MainFooter />
    </div>
  );
}
