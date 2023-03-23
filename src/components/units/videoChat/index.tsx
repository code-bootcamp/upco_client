import { useState } from "react";
import { MediaRequest } from "../../commons/hooks/customs/mediaRequest";
import * as S from "./styles";

export default function VideoChat(): JSX.Element {
  const [isVolume, setIsVolume] = useState(false);
  const [isMic, setIsMic] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const { localVideoRef, remoteVideoRef } = MediaRequest();

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
          <video ref={localVideoRef} autoPlay />
        </S.OpponetVideoBox>
        {/* <S.MyvideoBox>
          <video ref={localVideoRef} autoPlay />
        </S.MyvideoBox> */}
        <S.IconBox>
          <li onClick={onClickVolume}>{isVolume ? <S.VolumeOn /> : <S.VolumeOff />}</li>
          <li onClick={onClickMic}>{isMic ? <S.MicOn /> : <S.MicOff />}</li>
          <li onClick={onClickVideo}>{isVideo ? <S.VideoOn /> : <S.VideoOff />}</li>
        </S.IconBox>
        {/* <S.VideoBox>
          <S.OpponetVideo ref={localVideoRef} autoPlay />
          <S.MyvideoBox>
            <video ref={remoteVideoRef} autoPlay muted />
          </S.MyvideoBox>
        </S.VideoBox> */}
      </S.Wrapper>
    </>
  );
}
