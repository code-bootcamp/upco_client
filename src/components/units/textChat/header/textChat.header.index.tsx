// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
import VideoChat from "../../videoChat";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

// const socket = io("http://localhost:3000");

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  //   const [messages, setMessages] = useState<string[]>([]);

  //   useEffect(() => {
  //     socket.on("chat message", (msg: string) => {
  //       setMessages((prevMessages) => [...prevMessages, msg]);
  //     });
  //   }, []);

  return (
    <S.Wrapper>
      {props.isVideo && <VideoChat />}
      {/* {messages.map((msg, idx) => (
         <div key={idx}>{msg}</div>
       ))} */}
    </S.Wrapper>
  );
}
