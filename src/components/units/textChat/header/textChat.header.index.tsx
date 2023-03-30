import { useEffect, useState } from "react";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  const [messageLog, setMessageLog] = useState(props.messageLog);

  useEffect(() => {
    setMessageLog(props.messageLog);
  }, [props.messageLog]);

  const isNoMessage = messageLog.length === 0;

  return (
    <S.Wrapper>
      {isNoMessage && <div className="noMessage">메시지가 없습니다.</div>}
      {!isNoMessage &&
        messageLog.map((msg, index) => (
          <div key={index} className={msg.senderId === props.myId ? "sentMessage" : ""}>
            {msg.senderId !== props.myId && <p>{msg.contents}</p>}
            {msg.senderId === props.myId && <p>{msg.contents}</p>}
          </div>
        ))}
    </S.Wrapper>
  );
}
