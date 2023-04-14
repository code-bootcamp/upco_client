import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import VideoChat from "../videoChat";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import { useRecoilState } from "recoil";
import { isOpenState, roomIdState } from "../../commons/stores";

const Wrapper = styled.div`
  max-width: 100%;
  height: calc(100vh - 64px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    height: calc(100vh - 54px - 64px);
    border-bottom: 1px solid #e2e2e2;
  }
`;

const LeftContents = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    display: ${(props) => (props.isOpen ? "none" : "")};
  }
`;

export default function TextChat(): JSX.Element {
  const [isVideo, setIsVideo] = useState(false);
  const [messages, setMessages] = useState<Array<{ contents: string; isSent: boolean }>>([]);
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const [messageLog, setMessageLog] = useState<Array<{ contents: string; senderId: string }>>([]);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const data = useQueryFetchLoginUser();
  const myId = data?.data?.fetchLoginUser.id;

  useEffect(() => {
    const newSocket = io("https://api.upco.space/", {
      path: "/chat/socket.io",
      transports: ["websocket"],
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("client", (contents: string) => {
        setMessages((prevMessages) => [...prevMessages, { contents, isSent: false }]);
      });

      socket.on("roomCreateOrJoin", (roomId: string) => {
        setRoomId(roomId);
      });

      socket.on("load Message", (messageLog: Array<{ contents: string; senderId: string }>) => {
        setMessageLog(messageLog);
        setMessages((prevMessages) => [
          ...prevMessages,
          { contents: "채팅방에 입장하셨습니다", isSent: true },
        ]);
      });

      socket.emit("joinRoom", roomId);
    }

    return () => {
      setMessages([]);
    };
  }, [socket, roomId, setMessages, setMessageLog, setRoomId]);

  const emitData = (contents: string): void => {
    if (socket) {
      setMessages((prevMessages) => [...prevMessages, { contents, isSent: true }]);
      socket.emit("message", { roomId, contents, myId });
    }
  };
  const onClickVideo = (): void => {
    setIsVideo(true);
  };

  return (
    <>
      <Wrapper>
        <LeftContents isOpen={isOpen}>
          <div>
            <TextChatHeader
              isVideo={isVideo}
              messages={messages}
              messageLog={messageLog}
              myId={myId ?? ""}
              roomId={roomId}
            />
            {roomId && <TextChatBody emitData={emitData} onClickVideo={onClickVideo} />}
          </div>
          {isVideo && <VideoChat />}
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
