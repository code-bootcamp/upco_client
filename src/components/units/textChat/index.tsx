import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import VideoChat from "../videoChat";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import { useRecoilState } from "recoil";
import { roomIdState } from "../../commons/stores";

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
  const [messages, setMessages] = useState<Array<{ contents: string; isSent: boolean }>>([]);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const userJoinedMessageRef = useRef<HTMLParagraphElement>(null);
  const [joinMessage, setJoinMessage] = useState("");
  const data = useQueryFetchLoginUser();
  const myId = data.data.fetchLoginUser.id;
  // console.log(socket);
  // console.log(roomId, "1234");
  console.log(messages);
  useEffect(() => {
    const newSocket = io("http://10.34.233.161:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    newSocket.on("client", (contents) => {
      setMessages((prevMessages) => [...prevMessages, { content: contents, isSent: false }]);
    });

    newSocket.on("roomCreateOrJoin", (roomId) => {
      setRoomId(roomId);
    });
    // newSocket.emit("new user", myId);
    newSocket.on("join message", (msg) => {
      setJoinMessage(msg);
    });
    // newSocket.emit("join room", chatroomId);

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const emitData = (contents: string): void => {
    if (socket) {
      setMessages((prevMessages) => [...prevMessages, { content: contents, isSent: true }]);
      socket.emit("message", { roomId, contents, myId });
      // console.log("룸아이디: ", roomId, "내아이디: ", myId, "내용: ", contents);
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
