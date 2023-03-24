import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { boolean } from "yup";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useMutationLocation } from "../../commons/hooks/mutation/useMutationLocation";
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
  const [state, setState] = useState<{
    sw: string;
    ne: string;
  }>();
  const [level, setLevel] = useState<number>();
  const [location] = useMutationLocation();

  const { isOpen, mapCreation } = useMapCreationMode();
  const { position, geolocationFn } = useGeolocationMode();
  const { data } = useQuery(FIND_AROUND_USERS, {
    variables: {
      bothLocation: {
        lat1: Number(state?.sw.replace(/\(|\)/g, "").split(", ")[0]),
        lng1: Number(state?.sw.replace(/\(|\)/g, "").split(", ")[1]),
        lat2: Number(state?.ne.replace(/\(|\)/g, "").split(", ")[0]),
        lng2: Number(state?.ne.replace(/\(|\)/g, "").split(", ")[1]),
      },
    },
  });

  const [userLocation, setUserLocation] = useState(
    data?.findAroundUsers !== undefined && [
      {
        lat: data?.findAroundUsers.lat,
        lng: data?.findAroundUsers.lng,
      },
    ]
  );

  // lat1, lng1 남서쪽 위도 경도
  // lat2, lng2 북동쪽 위도 경도
  console.log("데ㅔ떼이터", data);
  console.log("영역좌표", state);

  geolocationFn();
  mapCreation();

  useEffect(() => {
    const interval = setInterval(() => {
      const result = location({
        variables: {
          location: {
            lat: position?.coords.latitude ?? 36.4455,
            lng: position?.coords.longitude ?? 126.12321,
          },
        },
      });
      console.log(" 현재 위치를 보냈음", result);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log("레벨", level);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOpen && (
        <MainBody
          userLocation={userLocation}
          data={data}
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
