import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapBody(props: {
  state: {
    sw: string | undefined;
    ne: string | undefined;
  };
}): JSX.Element {
  return (
    <>
      {props.position === null ? (
        <div style={{ width: 1200, height: 800, backgroundColor: "gray" }}></div>
      ) : (
        <Map
          center={{
            lat: props.position?.coords.latitude ?? 34.55635,
            lng: props.position?.coords.longitude ?? 127.795841,
          }}
          style={{ width: "1200px", height: "800px" }}
          onBoundsChanged={(map) =>
            props.setState({
              sw: map.getBounds().getSouthWest().toString(),
              ne: map.getBounds().getNorthEast().toString(),
            })
          }
        >
          <MapMarker
            position={{
              lat: props.position?.coords.latitude,
              lng: props.position?.coords.longitude,
            }}
          ></MapMarker>
          <MapMarker position={{ lat: 34.55635, lng: 127.795841 }}></MapMarker>
          <MapMarker position={{ lat: 35.55635, lng: 128.795841 }}></MapMarker>
          <MapMarker position={{ lat: 36.55635, lng: 129.795841 }}></MapMarker>
          <MapMarker position={{ lat: 37.55635, lng: 130.795841 }}></MapMarker>
        </Map>
      )}

      {props.position && (
        <div>
          <p>latitude: {props.position?.coords.latitude}</p>
          <p>longitude: {props.position?.coords.longitude}</p>
        </div>
      )}
    </>
  );
}
