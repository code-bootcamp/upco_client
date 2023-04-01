import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  const [messages, setMessages] = useState<Array<{ contents: string; isSent: boolean }>>([]);
  const [height, setHeight] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(
      props.messages.map((msg) => ({
        contents: msg.contents,
        isSent: msg.isSent,
      }))
    );
  }, [props.messages]);

  useEffect(() => {
    const updateHeight = () => {
      if (wrapperRef.current) {
        setHeight(wrapperRef.current.offsetHeight);
      }
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const isNoMessage = props.messageLog.length === 0;

  return (
    <S.Wrapper>
      {isNoMessage && <div className="noMessage">메시지가 없습니다.</div>}
      {!isNoMessage &&
        props.messageLog.map((msg, index) => (
          <div
            key={index}
            className={msg.senderId === props.myId ? "sentMessage" : "receivedMessage"}
          >
            <p>{msg.contents}</p>
          </div>
        ))}
      {messages.map((msg, index) => (
        <div key={index} className={msg.isSent ? "sentMessage" : "receivedMessage"}>
          <p>{msg.contents}</p>
        </div>
      ))}
    </S.Wrapper>
  );
}
