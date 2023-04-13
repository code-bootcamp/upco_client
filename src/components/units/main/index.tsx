import { useState } from "react";
import { useRecoilState } from "recoil";
import { useGeolocationMode } from "../../commons/hooks/customs/useGeolocationMode";
import { useLocationInitialMode } from "../../commons/hooks/customs/useLocationInitialMode";
import { useLocationMode } from "../../commons/hooks/customs/useLocationMode";
import { useLocationSaveMode } from "../../commons/hooks/customs/useLocationSaveMode";
import { useMapCreationMode } from "../../commons/hooks/customs/useMapCreationMode";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import { useQueryFindAroundUsers } from "../../commons/hooks/queries/useQueryFindAroundUsers";
import { locationState, positionState } from "../../commons/stores";
import MainBody from "./body/main.body.index";

export default function MainPage(): JSX.Element {
  const [_, setLevel] = useState<number>(); // 지도 축소 확대 크기
  const [location] = useRecoilState(locationState); // 영역 좌표
  const [position] = useRecoilState(positionState); // 내 현재 위치

  const { isOpen, mapCreation } = useMapCreationMode();
  const { geolocationFn } = useGeolocationMode();
  const { locationSaveFn } = useLocationSaveMode(); // 영역 좌표 location 변수에 저장
  const { useLocationInitialSave } = useLocationInitialMode();
  const { useLocation } = useLocationMode();
  const { data } = useQueryFetchLoginUser(); // 로그인 유저 데이터
  const result = useQueryFindAroundUsers(); // 현재 영역좌표 내 다른 유저 위치 출력

  useLocationInitialSave(); // 영역 좌표 location 변수에 마운트 이후 초기값 저장
  geolocationFn(); // 내 위치 position 변수에 저장
  mapCreation(); // 지도 출력
  useLocation(); // 내 현재 위치 서버에 보내는 함수

  return (
    <>
      {isOpen && (
        <>
          <MainBody
            data={data}
            locationSaveFn={locationSaveFn}
            result={result}
            location={location}
            position={position}
            setLevel={setLevel}
          ></MainBody>
        </>
      )}
    </>
  );
}
