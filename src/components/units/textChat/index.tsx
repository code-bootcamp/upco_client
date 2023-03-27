import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import VideoChat from "../videoChat";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";
import { v4 as uuidv4 } from "uuid";

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
  const [userId, setUserId] = useState<string>("");
  const userJoinedMessageRef = useRef<HTMLParagraphElement>(null);
  console.log(socket);
  const generateUserId = (): string => {
    return uuidv4();
  };

  useEffect(() => {
    const newSocket = io("http://10.34.233.87:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    newSocket.on("client", (data: string) => {
      setMessages((prevMessages) => [...prevMessages, { content: data, isSent: false }]);
    });
    newSocket.on("connection", () => {
      const userId = generateUserId();
      setUserId(userId);
      newSocket.emit("new user", userId);

      const userJoinedMessage = "채팅방에 입장하셨습니다.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: userJoinedMessage, isSent: true },
      ]);

      if (userJoinedMessageRef.current) {
        userJoinedMessageRef.current.textContent = userJoinedMessage;
      }
    });

    // newSocket.on("join", (userId: string) => {});

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
            <TextChatHeader
              isVideo={isVideo}
              messages={messages}
              userId={userId}
              userJoinedMessageRef={userJoinedMessageRef}
            />
            <TextChatBody emitData={emitData} onClickVideo={onClickVideo} messages={messages} />
          </div>
          {isVideo && <VideoChat />}
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
