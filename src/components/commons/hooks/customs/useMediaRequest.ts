 import { RefObject, useEffect, useRef } from "react";
import { io } from "socket.io-client";

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

  const constraints: IMediaStreamConstraints = { audio: true, video: true };

  useEffect(() => {
    const newSocket = io("http://10.34.233.83:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    const pc = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    const getMedia = async (): Promise<void> => {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      // localVideo 출력
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      stream.getTracks().forEach((track) => {
        if (pc) {
          pc.addTrack(track, stream);
        }
      });

      // remoteVideo 출력
      pc.ontrack = (event: RTCTrackEvent) => {
        console.log(event, "이벤트다!!!");
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        } else {
          alert("remoteVideoRef is null");
        }
      };

      pc.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
        const candidate = event.candidate;
        if (candidate !== null) {
          newSocket.emit("candidate", event.candidate);
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // offer
      newSocket.emit("offer", async (offer: RTCSessionDescriptionInit) => {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));

        // answer 서버에 emit 보내기
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        newSocket.emit("answer", answer);
      });

      // answer
      newSocket.on("answer", async (answer: RTCSessionDescriptionInit) => {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
      });

      // candidate
      newSocket.on("candidate", async (candidate: RTCIceCandidate) => {
        try {
          await pc.addIceCandidate(candidate);
        } catch (error) {
          alert("error");
        }
      });
    };

    void getMedia();
  }, []);

  return { localVideoRef, remoteVideoRef };
};

