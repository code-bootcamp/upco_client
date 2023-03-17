import * as S from "./textChat.body.styles";
import { BsEmojiSmile, BsCameraVideo } from "react-icons/bs";
import { SlPicture } from "react-icons/sl";
export default function TextChatBody(): JSX.Element {
  return (
    <>
      <form>
        <S.Wrapper>
          <S.SendContents />
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
