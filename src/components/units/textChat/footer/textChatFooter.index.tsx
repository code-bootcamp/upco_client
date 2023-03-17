import * as S from "./textChatFooter.styles";

export default function TextChatFooter(): JSX.Element {
  return (
    <>
      <form>
        {/* <S.SendWrapper> */}
        <S.SendContents />
        {/* <S.SendBtnWrapper>
            <S.SendBtn>전송</S.SendBtn>
          </S.SendBtnWrapper>
        </S.SendWrapper> */}
      </form>
    </>
  );
}
