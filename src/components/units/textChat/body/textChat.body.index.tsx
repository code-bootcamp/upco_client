import React, { ChangeEvent, useState } from "react";
import io from "socket.io-client";

import * as S from "./textChat.body.styles";
import { BsEmojiSmile, BsCameraVideo } from "react-icons/bs";
import { SlPicture } from "react-icons/sl";
export default function TextChatBody(): JSX.Element {
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const socket = io("http://localhost:3000");
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Wrapper>
          <S.SendContents onChange={handleChange} />
          <S.SendMenu>
            <S.IconSection>
              <S.Icon>
                <BsEmojiSmile />
              </S.Icon>
              <S.Icon>
                <SlPicture />
              </S.Icon>
              <S.Icon>
                <BsCameraVideo />
              </S.Icon>
            </S.IconSection>
            <S.SendBtn>전송</S.SendBtn>
          </S.SendMenu>
        </S.Wrapper>
      </form>
    </>
  );
}
