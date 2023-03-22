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

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (contents.trim() === "") return;
    props.emitData(contents);
    setContents("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Wrapper>
          <S.SendContents onChange={handleChange} value={contents} />
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
            <S.SendBtn>전송</S.SendBtn>
          </S.SendMenu>
        </S.Wrapper>
      </form>
    </>
  );
}
