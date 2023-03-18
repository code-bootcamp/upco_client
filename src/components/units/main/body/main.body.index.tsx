import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapBody(props: {
  state: {
    sw: string | undefined;
    ne: string | undefined;
  };
}): JSX.Element {
  console.log(props.state);
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "1200px", height: "800px" }}
        onBoundsChanged={(map) =>
          props.setState({
            sw: map.getBounds().getSouthWest().toString(),
            ne: map.getBounds().getNorthEast().toString(),
          })
        }
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
        <MapMarker position={{ lat: 34.55635, lng: 127.795841 }}></MapMarker>
        <MapMarker position={{ lat: 35.55635, lng: 128.795841 }}></MapMarker>
        <MapMarker position={{ lat: 36.55635, lng: 129.795841 }}></MapMarker>
        <MapMarker position={{ lat: 37.55635, lng: 130.795841 }}></MapMarker>
      </Map>
      {props.state && (
        <>
          <p>
            {`영역좌표는 남서쪽 위도, 경도는${props.state.sw}이고`}
            <br />
            {`북동쪽 위도, 경도는${props.state.ne}"입니다`}
          </p>
        </>
      )}
    </>
  );
}
