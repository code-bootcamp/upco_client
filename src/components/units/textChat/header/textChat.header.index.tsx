import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.messages.length > 0 ? (
        <S.Body>
          {props.messages.map((msg, index) => (
            <div key={index} className={msg.isSent ? "sent-message" : ""}>
              {msg.content}
            </div>
          ))}
        </S.Body>
      ) : (
        <div className="no-Message">메시지가 없습니다.</div>
      )}
    </S.Wrapper>
  );
}
