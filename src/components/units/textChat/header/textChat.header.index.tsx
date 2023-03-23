import VideoChat from "../../videoChat";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isVideo && <VideoChat />}
      <div key={props.message}>
        {props.message ? props.message.map((line) => <div>{line}</div>) : "No message received"}{" "}
      </div>
    </S.Wrapper>
  );
}
