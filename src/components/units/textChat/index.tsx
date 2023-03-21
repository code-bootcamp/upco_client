import styled from "@emotion/styled";
import { useState } from "react";
import ChatList from "../../list/chatList";
import FollowerList from "../../list/followerList";
import TextChatBody from "./body/textChat.body.index";
import TextChatHeader from "./header/textChat.header.index";

const Wrapper = styled.div`
  max-width: 100%;
  height: calc(100vh - 81px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  > div:first-of-type {
    border-right: 1px solid #c9c9c9;
  }
  > div:last-of-type {
    border-left: 1px solid #c9c9c9;
  }
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #01b6ad;
  margin: 10px 0px;
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
        <div>
          <Title>채팅 목록</Title>
          <ChatList />
        </div>
        <LeftContents>
          <TextChatHeader isVideo={isVideo} />
          <TextChatBody onClickVideo={onClickVideo} />
        </LeftContents>
        <div>
          <Title>내 친구</Title>
          <FollowerList />
        </div>
      </Wrapper>
    </>
  );
}
