import { useEffect, useRef, useState } from "react";

interface MediaStreamConstraints {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
}

export const MediaRequest = (): void => {
  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const pcRef = useRef(null);

  const constraints = { audio: true, video: true };

  useEffect(() => {
    const startStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;
        const pc = new RTCPeerConnection();
        pcRef.current = pc;
        pc.addStream(stream);

        pc.onaddstream = (event) => {
          setRemoteStream(event.stream);
          remoteVideoRef.current.srcObject = event.stream;
        };

        const offer = await pc.createOffer();
        await pc.setLocalDescription(new RTCSessionDescription(offer));

        // Here, you can send the offer to the other user using signaling server.
        // Once they receive the offer, they will create an answer and send it back to you.
        // You will then set the remote description to this answer to complete the connection.
      } catch (error) {
        console.error(error);
      }
    };

    startStream();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  return { localVideoRef, remoteVideoRef };
};
