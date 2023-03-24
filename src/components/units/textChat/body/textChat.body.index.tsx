import * as S from "./textChat.body.styles";
import { BsEmojiSmile, BsCameraVideo } from "react-icons/bs";
import { SlPicture } from "react-icons/sl";
import { ITextChatBodyProps } from "./textChat.body.types";
import { useState } from "react";

export default function TextChatBody(props: ITextChatBodyProps): JSX.Element {
  const [contents, setContents] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (contents.trim() === "") return;
    props.emitData(contents);
    setContents("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.SendContents onChange={handleChange} onKeyDown={handleKeyDown} value={contents} />
        <S.SendMenu>
          <S.IconSection>
            <S.Icon>
              <BsEmojiSmile />
            </S.Icon>
            <S.Icon>
              <SlPicture />
            </S.Icon>
            <S.Icon>
              <BsCameraVideo onClick={props.onClickVideo} />
            </S.Icon>
          </S.IconSection>
          <S.SendBtn type="submit">전송</S.SendBtn>
        </S.SendMenu>
      </S.Wrapper>
    </form>
  );
}
