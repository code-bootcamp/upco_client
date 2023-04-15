import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
  kakao?: typeof import("react-kakao-maps-sdk");
};

export const useMapCreationMode = (): {
  isOpen: boolean;
  mapCreation: () => void;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const myKey = String(process.env.NEXT_PUBLIC_API_KEY);

  const mapCreation = (): void => {
    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${myKey}&libraries=services&libraries=clusterer`;

      document.head.appendChild(script);
      script.onload = () => {
        window.kakao.maps.load(function () {
          setIsOpen(true);
        });
      };
    }, []);
  };

  return { mapCreation, isOpen };
};
