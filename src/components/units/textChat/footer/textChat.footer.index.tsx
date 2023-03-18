import * as S from "./textChat.footer.styles";
import { useState } from "react";
import ChatList from "../../../commons/hocs/chatList";
import FollowerList from "../../../commons/hocs/followerList";

export default function TextChatFooter(): JSX.Element {
  const [selectedComponent, setSelectedComponent] = useState("none");

  const handleChatClick = (): void => {
    setSelectedComponent("chat");
  };

  const handleFollowerClick = (): void => {
    setSelectedComponent("follower");
  };

  return (
    <>
      <S.Wrapper>
        <S.ChatTitle onClick={handleChatClick}>채팅</S.ChatTitle>
        <S.FollowerTitle onClick={handleFollowerClick}>친구 목록</S.FollowerTitle>
      </S.Wrapper>

      {selectedComponent === "chat" ? (
        <ChatList />
      ) : selectedComponent === "follower" ? (
        <FollowerList />
      ) : (
        <ChatList />
      )}
    </>
  );
}
