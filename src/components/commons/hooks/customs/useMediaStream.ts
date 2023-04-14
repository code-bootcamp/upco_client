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

  pcRef.current = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  });

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

  // const createAnswer = async (sdp: RTCSessionDescription): Promise<void> => {
  //   console.log("createAnswer");
  //   if (!(pcRef.current && socket)) {
  //     return;
  //   }

  //   try {
  //     console.log("나무아미타불!!");
  //     await pcRef.current.setRemoteDescription(sdp);
  //     const answerSdp = await pcRef.current.createAnswer();
  //     await pcRef.current.setLocalDescription(answerSdp);

  //     console.log("sent the answer");
  //     socket.emit("answer", answerSdp, roomId);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const socketOn = async (): Promise<void> => {
  //   await createOffer();

  //   if (!socket) {
  //     return;
  //   }
  //   socket.on("getOffer", async (sdp: RTCSessionDescription) => {
  //     await createAnswer(sdp);

  //     console.log(sdp, "GETOFFER!!");
  //   });

  //   socket.on("getAnswer", async (sdp: RTCSessionDescription) => {
  //     console.log(sdp, "GETANSWER!!");
  //     if (!pcRef.current) {
  //       return;
  //     }
  //     await pcRef.current.setRemoteDescription(sdp);
  //   });

  // socket.on("getCandidate", async (candidate: RTCIceCandidate) => {
  //   console.log(candidate, "GETCANDIDATE!!");
  //   if (!pcRef.current) {
  //     return;
  //   }

  //   await pcRef.current.addIceCandidate(candidate);
  // });

  // socket.on("connect_error", () => {
  //   console.log("Connection error");
  // });

  // socket.emit("join_room", {
  //   room: roomId,
  // });
  // };

  void getUserMedia();

  return { localVideoRef, remoteVideoRef };
};
