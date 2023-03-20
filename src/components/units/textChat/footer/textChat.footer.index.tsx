import * as S from "./textChat.footer.styles";
import { useState } from "react";
import ChatList from "../../../commons/hocs/chatList";
import FollowerList from "../../../commons/hocs/followerList";
import LocationList from "../../../commons/hocs/locationList";

export default function TextChatFooter(): JSX.Element {
  const [selectedComponent, setSelectedComponent] = useState("chat");

  const handleChatClick = (): void => {
    setSelectedComponent("chat");
  };

  const handleFollowerClick = (): void => {
    setSelectedComponent("follower");
  };

  return (
    <S.Wrapper>
      <S.ChatFooterTitle>
        <S.ChatTitle selected={selectedComponent === "chat"} onClick={handleChatClick}>
          채팅
        </S.ChatTitle>
        <S.FollowerTitle selected={selectedComponent === "follower"} onClick={handleFollowerClick}>
          친구 목록
        </S.FollowerTitle>
      </S.ChatFooterTitle>

      <S.DivideLine />
      {selectedComponent === "chat" ? (
        <ChatList />
      ) : selectedComponent === "follower" ? (
        <LocationList />
      ) : (
        <ChatList />
      )}
    </S.Wrapper>
  );
}
