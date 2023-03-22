import styled from "@emotion/styled";
import { useState } from "react";

import TextChatBody from "./body/textChat.body.index";
import TextChatFooter from "./footer/textChat.footer.index";
import TextChatHeader from "./header/textChat.header.index";

const Wrapper = styled.div`
  max-width: 100%;
  height: calc(100vh - 68px);
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
  const [isVideo, setIsVideo] = useState(false);

  const onClickVideo = (): void => {
    setIsVideo(true);
  };

  return (
    <>
      <Wrapper>
        <LeftContents>
          <TextChatHeader isVideo={isVideo} />
          <TextChatBody onClickVideo={onClickVideo} />
        </LeftContents>
        <TextChatFooter />
      </Wrapper>
    </>
  );
}
