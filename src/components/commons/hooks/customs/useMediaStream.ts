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
    const newSocket = io("http://10.34.233.64:4000/", {
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

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      stream.getTracks().forEach((track) => {
        if (pc) {
          pc.addTrack(track, stream);
        }
      });

      pc.ontrack = (event: RTCTrackEvent) => {
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

      newSocket.emit("offer", async (offer: RTCSessionDescriptionInit) => {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        newSocket.emit("answer", answer);
      });

      newSocket.on("answer", async (answer: RTCSessionDescriptionInit) => {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
      });

      newSocket.on("candidate", async (candidate: RTCIceCandidate) => {
        try {
          await pc.addIceCandidate(candidate);
        } catch (error) {
          alert(error);
        }
      });
    };

    void getMedia();
  }, []);

  return { localVideoRef, remoteVideoRef };
};
