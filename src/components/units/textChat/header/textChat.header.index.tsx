import VideoChat from "../../videoChat";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isVideo && <VideoChat />}
      {props.messages.length > 0 ? (
        props.messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.isSent ? "right" : "left" }}>
            {msg.content}
          </div>
        ))
      ) : (
        <div>메시지가 없습니다.</div>
      )}
    </S.Wrapper>
  );
}
