import * as S from "./main.footer.styles";
import { useState } from "react";
import FollowerList from "../../../list/followerList";
import LocationList from "../../../list/locationList";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { isOpenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

export default function MainFooter(props): JSX.Element {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

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
    <S.Wrapper isOpen={isOpen}>
      <S.ChatFooterTitle>
        <S.ChatTitle selected={selectedComponent === "location"} onClick={handleChatClick}>
          내 주변
        </S.ChatTitle>
        <S.FollowerTitle selected={selectedComponent === "follower"} onClick={handleFollowerClick}>
          친구 목록
        </S.FollowerTitle>
      </S.ChatFooterTitle>

      <S.DivideLine />
      <S.FollowList onClick={followerOpen}>친구 요청</S.FollowList>
      <S.DivideLine />
      {isFollower && <div>친구 리스트</div>}
      {selectedComponent === "location" ? (
        <LocationList data={props.data} />
      ) : selectedComponent === "follower" ? (
        <FollowerList />
      ) : (
        <LocationList />
      )}
    </S.Wrapper>
  );
}
