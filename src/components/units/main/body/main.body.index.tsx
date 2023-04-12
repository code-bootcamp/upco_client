import { CustomOverlayMap, MarkerClusterer, ZoomControl } from "react-kakao-maps-sdk";
import { BeatLoader } from "react-spinners";
import FilterlingUI from "../../../commons/items/filterling/filterling.index";
import MainFooter from "../footer/main.footer.index";
import * as S from "./main.body.styles";
import { IProps } from "./main.body.types";

export default function MainBody(props: IProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.position === null ? (
        <S.MabBox>
          <BeatLoader color="#6658ca" />
        </S.MabBox>
      ) : (
        <S.MabBox>
          <S.MabWeb
            center={{
              lat: props.position?.coords.latitude ?? 34.55635,
              lng: props.position?.coords.longitude ?? 127.795841,
            }}
            maxLevel={12}
            level={9}
            onZoomChanged={(map) => {
              props.setLevel(map.getLevel());
            }}
            onBoundsChanged={(map) => props.locationSaveFn(map)}
          >
            <FilterlingUI />
            <ZoomControl />
            <MarkerClusterer averageCenter={true} minLevel={4} minClusterSize={1}>
              <CustomOverlayMap
                position={{
                  lat: props.position.coords.latitude ?? 37.484,
                  lng: props.position.coords.longitude ?? 126.88,
                }}
              >
                <S.MyMarkerBox>
                  <S.MyMarker src="/images/marker/myMarker.png" style={{ zIndex: 5 }}></S.MyMarker>
                </S.MyMarkerBox>
              </CustomOverlayMap>
              {props.result?.data?.findAroundUsers.map((el) => (
                <CustomOverlayMap
                  position={{
                    lat: Number(el.lat),
                    lng: Number(el.lng),
                  }}
                  key={el.id}
                >
                  <S.MyMarkerBox>
                    <S.MyMarker
                      src="/images/marker/userMarker.png"
                      style={{ zIndex: 1 }}
                    ></S.MyMarker>
                  </S.MyMarkerBox>
                </CustomOverlayMap>
              ))}
            </MarkerClusterer>
          </S.MabWeb>
        </S.MabBox>
      )}
      <MainFooter result={props.result} />
    </S.Wrapper>
  );
}
