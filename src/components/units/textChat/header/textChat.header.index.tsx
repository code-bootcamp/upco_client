import { useEffect, useState } from "react";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  const [messageList, setMessageList] = useState<
    Array<{ contents: string; senderId: string; isSent: boolean }>
  >([]);

  useEffect(() => {
    setMessageList(
      props.messageLog
        .map((msg) => ({
          contents: msg.contents,
          senderId: msg.senderId,
          isSent: msg.senderId === props.myId,
        }))
        .concat(
          props.messages.map((msg) => ({
            contents: msg.content,
            isSent: msg.isSent,
          }))
        )
    );
  }, [props.messageLog, props.messages, props.myId]);

  const isNoMessage = messageList.length === 0;

  return (
    <S.Wrapper>
      {isNoMessage && <div className="noMessage">메시지가 없습니다.</div>}
      {!isNoMessage &&
        messageList.map((msg, index) => (
          <div key={index} className={msg.isSent ? "sentMessage" : "receivedMessage"}>
            <p>{msg.contents}</p>
          </div>
        ))}
    </S.Wrapper>
  );
}
