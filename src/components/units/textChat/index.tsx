import styled from "@emotion/styled";
import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";

const Wrapper = styled.div`
  max-width: 1200px;
  height: calc(100vh - 71px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const LeftContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function TextChat(): JSX.Element {
  return (
    <>
      <Wrapper>
        <LeftContents>
          <TextChatHeader />
          <TextChatBody />
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
