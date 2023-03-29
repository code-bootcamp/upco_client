import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Body>
        {props.joinMessage && <div className="systemMessage">{props.joinMessage}</div>}
        {props.messages.length > 0
          ? props.messages.map((msg, index) => (
              <div key={index} className={msg.isSent ? "sentMessage" : ""}>
                {msg.isUserJoinedMessage ? (
                  <p ref={props.userJoinedMessageRef}>{msg}</p>
                ) : (
                  msg.content
                )}
              </div>
            ))
          : null}
      </S.Body>
      {!props.joinMessage && props.messages.length === 0 && (
        <div className="noMessage">메시지가 없습니다.</div>
      )}
    </S.Wrapper>
  );
}
