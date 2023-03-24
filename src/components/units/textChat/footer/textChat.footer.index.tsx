import * as S from "./textChat.footer.styles";
import { useState } from "react";
import ChatList from "../../../list/chatList";
import FollowerList from "../../../list/followerList";

export default function TextChatFooter(): JSX.Element {
  const [selectedComponent, setSelectedComponent] = useState("chat");
  const [isFollower, setIsFollower] = useState(false);

  const handleChatClick = (): void => {
    setSelectedComponent("chat");
  };

  const handleFollowerClick = (): void => {
    setSelectedComponent("follower");
  };

  const followerOpen = (): void => {
    setIsFollower((prev) => !prev);
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
      <S.FollowList onClick={followerOpen}>친구 요청</S.FollowList>
      {isFollower && <div>친구 리스트</div>}
      {selectedComponent === "chat" ? (
        <ChatList />
      ) : selectedComponent === "follower" ? (
        <FollowerList />
      ) : (
        <ChatList />
      )}
    </S.Wrapper>
  );
}
