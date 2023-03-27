import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Body>
        {props.messages.length > 0 ? (
          props.messages.map((msg, index) => (
            <div key={index} className={msg.isSent ? "sentMessage" : ""}>
              {msg.isUserJoinedMessage ? (
                <p ref={props.userJoinedMessageRef}>{msg.content}</p>
              ) : (
                msg.content
              )}
            </div>
          ))
        ) : (
          <div className="noMessage">메시지가 없습니다.</div>
        )}
      </S.Body>
    </S.Wrapper>
  );
}
