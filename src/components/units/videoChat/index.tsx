import { useState } from "react";
import { useMediaRequest } from "../../commons/hooks/customs/useMediaRequest";
import * as S from "./styles";

export default function VideoChat(): JSX.Element {
  const [isVolume, setIsVolume] = useState(false);
  const [isMic, setIsMic] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const { localVideoRef, remoteVideoRef } = useMediaRequest();

  const onClickVolume = (): void => {
    setIsVolume((prev) => !prev);
  };

  const onClickMic = (): void => {
    setIsMic((prev) => !prev);
  };

  const onClickVideo = (): void => {
    setIsVideo((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.OpponetVideoBox>
          <div>
            <video ref={remoteVideoRef} autoPlay />
          </div>
        </S.OpponetVideoBox>
        <S.MyvideoBox>
          <div>
            <video ref={localVideoRef} autoPlay muted />
          </div>
          <S.IconBox>
            <li onClick={onClickVolume}>{isVolume ? <S.VolumeOn /> : <S.VolumeOff />}</li>
            <li onClick={onClickMic}>{isMic ? <S.MicOn /> : <S.MicOff />}</li>
            <li onClick={onClickVideo}>{isVideo ? <S.VideoOn /> : <S.VideoOff />}</li>
          </S.IconBox>
        </S.MyvideoBox>
      </S.Wrapper>
    </>
  );
}
