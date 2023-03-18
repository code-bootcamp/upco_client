import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
  kakao?: any;
};

export const useMapCreationMode = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const mapCreation = (): void => {
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
  };

  return { mapCreation, isOpen };
};
