import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
declare const window: typeof globalThis & {
  kakao?: any;
};

export default function MainPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=546bab6b1ad8e036b1f679bbb9af2e7c&libraries=services";

    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        setIsOpen(true);
      });
    };
  }, []);
  return (
    <>
      {isOpen && (
        <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "1200px", height: "800px" }}>
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
        </Map>
      )}
    </>
  );
}
