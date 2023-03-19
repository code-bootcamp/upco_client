import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import * as S from "./textChat.header.styles";

const socket = io("http://localhost:3000");

export default function TextChatHeader(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("chat message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  return (
    <S.Wrapper>
      {messages.map((msg, idx) => (
        <div key={idx}>{msg}</div>
      ))}
    </S.Wrapper>
  );
}
