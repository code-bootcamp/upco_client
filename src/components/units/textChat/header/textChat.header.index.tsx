import VideoChat from "../../videoChat";
import * as S from "./textChat.header.styles";
import { TextChatHeaderProps } from "./textChat.header.types";

export default function TextChatHeader(props: TextChatHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.isVideo && <VideoChat />}
      {props.message ? props.message : "No message received"}
    </S.Wrapper>
  );
}
