import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import VideoChat from "../videoChat";
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
  flex-direction: row;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default function TextChat(): JSX.Element {
  const [isVideo, setIsVideo] = useState(false);
  const [messages, setMessages] = useState<Array<{ content: string; isSent: boolean }>>([]);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  console.log(socket);
  useEffect(() => {
    const newSocket = io("http://130.211.42.13:80", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    newSocket.on("client", (data: string) => {
      setMessages((prevMessages) => [...prevMessages, { content: data, isSent: false }]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const emitData = (contents: string): void => {
    if (socket) {
      setMessages((prevMessages) => [...prevMessages, { content: contents, isSent: true }]);
      socket.emit("server", contents);
    }
  };
  const onClickVideo = (): void => {
    setIsVideo(true);
  };

  return (
    <>
      <Wrapper>
        <LeftContents>
          <div>
            <TextChatHeader isVideo={isVideo} messages={messages} />
            <TextChatBody emitData={emitData} onClickVideo={onClickVideo} messages={messages} />
          </div>
          {isVideo && <VideoChat />}
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
