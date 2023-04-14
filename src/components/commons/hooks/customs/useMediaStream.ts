import { RefObject, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { Socket, io } from "socket.io-client";
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
  const [socket, setSocket] = useState<Socket>();
  const pcRef = useRef<RTCPeerConnection>();
  const roomId = useRecoilValue(roomIdState);
  const constraints: IMediaStreamConstraints = { audio: true, video: true };

  useEffect(() => {
    const newSocket = io("http://10.34.233.97:4000/", {
      path: "/chat/socket.io",
      transports: ["websocket"],
    });
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });
  }, []);

  const getUserMedia = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      if (pcRef.current) {
        stream.getTracks().forEach((track) => {
          if (!pcRef.current) {
            return;
          }
          pcRef.current.addTrack(track, stream);
        });

        pcRef.current.onicecandidate = (e) => {
          if (e.candidate && socket) {
            socket.emit("candidate", e.candidate, roomId);
          }
        };
      }
      void createOffer();
    } catch (e) {
      console.error(e);
    }
  };

  const createOffer = async (): Promise<void> => {
    if (!pcRef.current) {
      return;
    }
    const offer = await pcRef.current.createOffer();
    console.log(offer, "OFFer");
    await pcRef.current.setLocalDescription(offer);

    socket?.emit("offer", offer.sdp);

    await getOffer();
  };

  const getOffer = async (): Promise<void> => {
    socket?.on("getOffer", async (sdp) => {
      try {
        if (!pcRef.current) {
          return;
        }
        await pcRef.current.setRemoteDescription(new RTCSessionDescription({ type: "offer", sdp }));
        await createAnswer();
      } catch (error) {
        console.error("Error setting remote description:", error);
      }
    });
  };

  const createAnswer = async (): Promise<void> => {
    if (!pcRef.current) {
      return;
    }

    const currentState = pcRef.current.signalingState;
    if (currentState !== "stable") {
      return;
    }

    const answer = await pcRef.current.createAnswer();
    await pcRef.current.setLocalDescription(answer);
    socket?.emit("answer", answer.sdp);

    await getAnswer();
  };

  const getAnswer = async (): Promise<void> => {
    socket?.on("getAnswer", async (sdp) => {
      try {
        if (!pcRef.current) {
          return;
        }
        await pcRef.current.setRemoteDescription(
          new RTCSessionDescription({ type: "answer", sdp })
        );
        await getCandidate();
      } catch (error) {
        console.error("Error setting remote description:", error);
      }
    });
  };

  const getCandidate = async (): Promise<void> => {
    socket?.on("getCandidate", async (candidate: RTCIceCandidate) => {
      console.log(candidate, "GETCANDIDATE!!");
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
    });
  };

  void getUserMedia();

  if (pcRef.current) {
    pcRef.current.ontrack = (e) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = e.streams[0];
      }
    };
  }
  console.log(pcRef);
  return { localVideoRef, remoteVideoRef };
};
