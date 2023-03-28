import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useCallback, useState } from "react";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
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
  const { data: datas } = useQueryFetchLoginUser();

  console.log("로그인 데이터", datas);

  // console.log(location, "영역좌ddd 표");

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const { useLocation } = useLocationMode();

  const [locations] = useState({
    sw: location.sw.replace(/\(|\)/g, "").split(", "),
    ne: location.ne.replace(/\(|\)/g, "").split(", "),
  });
  console.log("aaa", location.sw.replace(/\(|\)/g, "").split(", ")[0]);
  console.log("bbb", locations);

  const { data } = useQuery(FIND_AROUND_USERS, {
    variables: {
      bothLocation: {
        lat1: location.sw.replace(/\(|\)/g, "").split(", ")[0],
        lng1: location.sw.replace(/\(|\)/g, "").split(", ")[1],
        lat2: location.ne.replace(/\(|\)/g, "").split(", ")[0],
        lng2: location.ne.replace(/\(|\)/g, "").split(", ")[1],
      },
    },
  });

  console.log("유저위치데이터", data);

  const debouncedHandler = useCallback(
    _.debounce((map) => {
      setLocation({
        sw: map.getBounds().getSouthWest().toString(),
        ne: map.getBounds().getNorthEast().toString(),
      });
    }, 500),
    []
  );

  geolocationFn();
  mapCreation();
  useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && (
        <MainBody
          debouncedHandler={debouncedHandler}
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
