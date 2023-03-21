import { CustomOverlayMap, Map, MarkerClusterer, ZoomControl } from "react-kakao-maps-sdk";
import { CustomMarker, MabWeb } from "./main.body.styles";

export default function MainBody(props: {
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
        <MabWeb
          center={{
            lat: props.position?.coords.latitude ?? 34.55635,
            lng: props.position?.coords.longitude ?? 127.795841,
          }}
          onBoundsChanged={(map) =>
            props.setState({
              sw: map.getBounds().getSouthWest().toString(),
              ne: map.getBounds().getNorthEast().toString(),
            })
          }
          maxLevel={12}
          level={3}
          onZoomChanged={(map) => props.setLevel(map.getLevel())}
        >
          <ZoomControl />
          <MarkerClusterer averageCenter={true} minLevel={2}>
            <CustomOverlayMap
              position={{
                lat: props.position?.coords.latitude,
                lng: props.position?.coords.longitude,
              }}
            >
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>
            <CustomOverlayMap position={{ lat: 37.4847446, lng: 126.8969638 }}>
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>
            <CustomOverlayMap position={{ lat: 37.4848446, lng: 126.8969738 }}>
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>{" "}
            <CustomOverlayMap position={{ lat: 37.4849446, lng: 126.8969938 }}>
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>{" "}
            <CustomOverlayMap position={{ lat: 37.4846446, lng: 126.8969838 }}>
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>
            <CustomOverlayMap
              position={{
                lat: 33.450701,
                lng: 126.570667,
              }}
            >
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>
            <CustomOverlayMap
              position={{
                lat: 33.450801,
                lng: 126.570767,
              }}
            >
              <CustomMarker></CustomMarker>
            </CustomOverlayMap>
          </MarkerClusterer>
        </MabWeb>
      )}
    </>
  );
}
