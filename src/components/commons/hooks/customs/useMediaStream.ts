import { RefObject, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { io } from "socket.io-client";
import { roomIdState } from "../../stores";

interface IMediaStreamConstraints {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
}

interface IUseMediaRequestReturnType {
  localVideoRef: RefObject<HTMLVideoElement>;
  remoteVideoRef: RefObject<HTMLVideoElement>;
}

export const useMediaStream = (): IUseMediaRequestReturnType => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();
  const roomId = useRecoilValue(roomIdState);
  const constraints: IMediaStreamConstraints = { audio: true, video: true };

  const newSocket = io("http://172.30.1.35:4000/", {
    path: "/chat/socket.io",
    transports: ["websocket"],
  });
  console.log(newSocket, "!!!!");

  pcRef.current = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  });

  pcRef.current.ontrack = (event) => {
    console.log(event.track, "이벤트!");
  };

  const getUserMedia = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      if (!(pcRef.current && newSocket)) {
        return;
      }
      stream.getTracks().forEach((track) => {
        if (!pcRef.current) {
          return;
        }
        pcRef.current.addTrack(track, stream);
      });

      pcRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          if (!newSocket) {
            return;
          }
          newSocket.emit("candidate", e.candidate, roomId);
        }
      };

      pcRef.current.ontrack = null;

      pcRef.current.ontrack = (e) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const createOffer = async (): Promise<void> => {
      console.log("CREATOFFER!!");
      if (!(pcRef.current && newSocket)) {
        return;
      }
      try {
        const sdp = await pcRef.current.createOffer();
        await pcRef.current.setLocalDescription(sdp);
        newSocket.emit("offer", sdp, roomId);
      } catch (e) {
        console.error(e);
      }
    };

    const createAnswer = async (sdp: RTCSessionDescription): Promise<void> => {
      console.log(sdp, "CREATEANSWER!!");
      if (!(pcRef.current && newSocket)) {
        return;
      }

      try {
        await pcRef.current.setRemoteDescription(sdp);
        const answerSdp = await pcRef.current.createAnswer();
        await pcRef.current.setLocalDescription(answerSdp);
        newSocket.emit("answer", answerSdp, roomId);
        console.log(answerSdp, "ANSWERSDP!!");
      } catch (e) {
        console.error(e);
      }
    };

    const socketOn = async (): Promise<void> => {
      await createOffer();

      newSocket.on("getOffer", async (sdp: RTCSessionDescription) => {
        await createAnswer(sdp);

        console.log(sdp, "GETOFFER!!");
      });

      newSocket.on("getAnswer", async (sdp: RTCSessionDescription) => {
        console.log(sdp, "GETANSWER!!");
        if (!pcRef.current) {
          return;
        }
        await pcRef.current.setRemoteDescription(sdp);
      });

      newSocket.on("getCandidate", async (candidate: RTCIceCandidate) => {
        console.log(candidate, "GETCANDIDATE!!");
        if (!pcRef.current) {
          return;
        }

        await pcRef.current.addIceCandidate(candidate);
      });

      newSocket.emit("join_room", {
        room: roomId,
      });
    };

    void socketOn();

    void getUserMedia();

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  return { localVideoRef, remoteVideoRef };
};
