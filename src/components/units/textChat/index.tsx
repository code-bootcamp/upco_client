import styled from "@emotion/styled";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextChatColumn = styled.div``;

export default function TextChat(): JSX.Element {
  return (
    <>
      <Wrapper>
        <TextChatColumn>
          <TextChatHeader />
          <TextChatBody />
        </TextChatColumn>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
