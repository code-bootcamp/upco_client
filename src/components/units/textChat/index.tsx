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
  const [messages, setMessages] = useState<{ content: string; isSent: boolean }[]>([]);
  console.log(socket);
  useEffect(() => {
    const socket = io.connect("http://10.34.233.98:4000", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    socket.on("client", (data) => {
      setMessages((prevMessages) => [...prevMessages, { content: data, isSent: false }]);
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const emitData = (contents: string): void => {
    setMessages((prevMessages) => [...prevMessages, { content: contents, isSent: true }]);
    socket.emit("server", contents);
    console.log(contents);
  };
  const onClickVideo = (): void => {
    setIsVideo(true);
  };

  // socket.on('server', (data) => { if (data.isSent) { /* 발신 메시지 처리 */ } else { /* 수신 메시지 처리 */ } })

  return (
    <>
      <Wrapper>
        <LeftContents>
          <TextChatHeader isVideo={isVideo} messages={messages} />
          <TextChatBody emitData={emitData} onClickVideo={onClickVideo} messages={messages} />
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
