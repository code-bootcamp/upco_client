import * as S from "./main.footer.styles";
import { useState } from "react";
import FollowerList from "../../../list/followerList";
import LocationList from "../../../list/locationList";

export default function MainFooter(): JSX.Element {
  const [selectedComponent, setSelectedComponent] = useState("location");
  const [isFollower, setIsFollower] = useState(false);

  const handleChatClick = (): void => {
    setSelectedComponent("location");
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
        <S.ChatTitle selected={selectedComponent === "location"} onClick={handleChatClick}>
          내 주변
        </S.ChatTitle>
        <S.FollowerTitle selected={selectedComponent === "follower"} onClick={handleFollowerClick}>
          친구 목록
        </S.FollowerTitle>
      </S.ChatFooterTitle>

      <S.DivideLine />
      <div onClick={followerOpen}>친구 요청</div>
      <S.DivideLine />
      {isFollower && <div>친구 리스트</div>}
      {selectedComponent === "location" ? (
        <LocationList />
      ) : selectedComponent === "follower" ? (
        <FollowerList />
      ) : (
        <LocationList />
      )}
    </S.Wrapper>
  );
}
