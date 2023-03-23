import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";

const Wrapper = styled.div`
  max-width: 100%;
  height: calc(100vh - 68px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const LeftContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function TextChat(): JSX.Element {
  const [socket, setSocket] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [message, setMessage] = useState("");
  console.log(socket);

  useEffect(() => {
    const socket = io.connect("http://10.34.233.98:4000", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    socket.on("client", (data) => {
      setMessage((prevMessage) => [...prevMessage, data]);
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const emitData = (contents: string): void => {
    socket.emit("server", contents);
  };

  const onClickVideo = (): void => {
    setIsVideo(true);
  };

  return (
    <>
      <Wrapper>
        <LeftContents>
          <TextChatHeader isVideo={isVideo} message={message} />
          <TextChatBody emitData={emitData} onClickVideo={onClickVideo} />
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
