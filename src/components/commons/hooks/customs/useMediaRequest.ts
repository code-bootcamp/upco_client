import { RefObject, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

interface IMediaStreamConstraints {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
}

interface IUseMediaRequestReturnType {
  localVideoRef: RefObject<HTMLVideoElement>;
  remoteVideoRef: RefObject<HTMLVideoElement>;
}

export const useMediaRequest = (): IUseMediaRequestReturnType => {
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [remoteStream, setRemoteStream] = useState<MediaStream>();
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);

  const constraints: IMediaStreamConstraints = { audio: true, video: true };

  useEffect(() => {
    const startStream = async (): Promise<void> => {
      const newSocket = io("http://10.34.232.83:4000/", {
        path: "/socket.io",
        transports: ["websocket"],
      });

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setLocalStream(stream);
        const localVideoCurrent = localVideoRef?.current;
        if (localVideoCurrent) {
          localVideoCurrent.srcObject = stream;
        }
        const pc = new RTCPeerConnection();
        pcRef.current = pc;
        let pcCurrnent = pcRef.current;
        if (pcCurrnent) {
          pcCurrnent = pc;
        }

        stream.getTracks().forEach((track) => {
          pc.addTrack(track, stream);
        });

        pc.ontrack = (event) => {
          setRemoteStream(event.streams[0]);
          const remoteVideoCurrent = remoteVideoRef?.current;
          if (remoteVideoCurrent) {
            remoteVideoCurrent.srcObject = event.streams[0];
          }
        };

        const offer = await pc.createOffer();
        await pc.setLocalDescription(new RTCSessionDescription(offer));

        newSocket.emit("offer", {
          offer: pc.localDescription,
        });
      } catch (error) {
        console.error(error);
      }
    };

    void startStream();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  return { localVideoRef, remoteVideoRef };
};
