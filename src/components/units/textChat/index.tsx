import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import VideoChat from "../videoChat";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";

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
  const [joinMessage, setJoinMessage] = useState("");
  const data = useQueryFetchLoginUser();
  const myId = data.data.fetchLoginUser.id;
  console.log(socket);
  console.log(joinMessage);

  const generateRoomId = (): string => {
    return uuidv4();
  };
  const chatroomId = generateRoomId();
  console.log(myId, "-----", chatroomId);

  useEffect(() => {
    const newSocket = io("http://10.34.233.64:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    newSocket.on("client", (data: string) => {
      setMessages((prevMessages) => [...prevMessages, { content: data, isSent: false }]);
    });
    newSocket.on("connection", () => {});

    newSocket.emit("new user", myId);

    newSocket.on("join message", (msg) => {
      setJoinMessage(msg);
    });

    newSocket.emit("join room", chatroomId);

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
              userJoinedMessageRef={userJoinedMessageRef}
              joinMessage={joinMessage}
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
