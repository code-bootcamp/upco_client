import styled from "@emotion/styled";
import { CustomOverlayMap, MarkerClusterer, ZoomControl } from "react-kakao-maps-sdk";
import { BeatLoader } from "react-spinners";
import { useRecoilState } from "recoil";
import FilterlingUI from "../../../commons/items/filterling/filterling.index";
import { isOpenState } from "../../../commons/stores";
import MainFooter from "../footer/main.footer.index";
import MainSideBar from "../sidebar/main.sidebar.index";
import { MabWeb, MabBox, MyMarker, MyMarkerBox } from "./main.body.styles";
import { IProps } from "./main.body.types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
const SubWrapper = styled.div`
  display: row;
  flex-direction: row;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export default function MainBody(props: IProps): JSX.Element {
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <Wrapper>
      {props.position === null ? (
        <MabBox>
          <BeatLoader color="#6658ca" />
        </MabBox>
      ) : (
        <MabBox>
          <MabWeb
            isOpen={isOpen}
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
                <MyMarkerBox>
                  <MyMarker src="/images/marker/myMarker.png" style={{ zIndex: 5 }}></MyMarker>
                </MyMarkerBox>
              </CustomOverlayMap>
              {props?.data?.findAroundUsers.map((el) => (
                <CustomOverlayMap
                  position={{
                    lat: el.lat,
                    lng: el.lng,
                  }}
                  key={el.id}
                >
                  <MyMarkerBox>
                    <MyMarker src="/images/marker/userMarker.png" style={{ zIndex: 1 }}></MyMarker>
                  </MyMarkerBox>
                </CustomOverlayMap>
              ))}

              <CustomOverlayMap
                position={{
                  lat: 37.4849435,
                  lng: 126.8969924,
                }}
              >
                <MyMarkerBox>
                  <MyMarker src="/images/marker/userMarker.png" style={{ zIndex: 1 }}></MyMarker>
                </MyMarkerBox>
              </CustomOverlayMap>
              <CustomOverlayMap
                position={{
                  lat: 37.4843435,
                  lng: 126.8965924,
                }}
              >
                <MyMarkerBox>
                  <MyMarker src="/images/marker/userMarker.png" style={{ zIndex: 1 }}></MyMarker>
                </MyMarkerBox>
              </CustomOverlayMap>
              <CustomOverlayMap
                position={{
                  lat: 37.4840435,
                  lng: 126.8960924,
                }}
              >
                <MyMarkerBox>
                  <MyMarker src="/images/marker/userMarker.png" style={{ zIndex: 1 }}></MyMarker>
                </MyMarkerBox>
              </CustomOverlayMap>

              <CustomOverlayMap
                position={{
                  lat: 37.4847435,
                  lng: 126.8950924,
                }}
              >
                <MyMarkerBox>
                  <MyMarker src="/images/marker/userMarker.png" style={{ zIndex: 1 }}></MyMarker>
                </MyMarkerBox>
              </CustomOverlayMap>
            </MarkerClusterer>
          </MabWeb>
        </MabBox>
      )}
      <MainFooter data={props.data} />
    </Wrapper>
  );
}
