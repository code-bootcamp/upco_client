import * as S from "./main.footer.styles";
import React, { useState } from "react";
import FollowerList from "../../../list/followerList";
import LocationList from "../../../list/locationList";
import { isCloseState, isOpenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import { useQueryFetchFriendRequests } from "../../../commons/hooks/queries/useQueryFetchFriendRequests";
import { useOnClickAcceptFriendRequest } from "../../../commons/hooks/customs/useOnClickAcceptFriendRequest";
import { useOnClickRejectFriendRequest } from "../../../commons/hooks/customs/useOnClickRejectFriendRequest";
import { useRouter } from "next/router";
import { IProps } from "./main.footer.types";

export default function MainFooter(props: IProps): JSX.Element {
  const { data } = useQueryFetchFriendRequests();
  const [isOpen] = useRecoilState(isOpenState);
  const [_, setIsClose] = useRecoilState(isCloseState);

  const { onClickAcceptFriendRequest } = useOnClickAcceptFriendRequest();
  const { onClickRejectFriendRequest } = useOnClickRejectFriendRequest();

  const [selectedComponent, setSelectedComponent] = useState("location");
  const [isFollower, setIsFollower] = useState(false);

  const router = useRouter();

  const handleChatClick = (): void => {
    setSelectedComponent("location");
    setIsClose(false);
  };

  const handleFollowerClick = (): void => {
    setSelectedComponent("follower");
    setIsClose(false);
  };

  const followerOpen = (): void => {
    setIsFollower((prev) => !prev);

    if (window.innerWidth <= 767) {
      setIsClose(true);
    }
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SubWrapper>
        <S.ChatFooterTitle>
          <S.ChatTitle selected={selectedComponent === "location"} onClick={handleChatClick}>
            내 주변
          </S.ChatTitle>
          <S.FollowerTitle
            selected={selectedComponent === "follower"}
            onClick={handleFollowerClick}
          >
            친구 목록
          </S.FollowerTitle>
        </S.ChatFooterTitle>

        {data?.fetchFriendRequests.length !== 0 && (
          <S.FollowList onClick={followerOpen}>친구 요청</S.FollowList>
        )}
      </S.SubWrapper>
      <S.DivideLine />
      {isFollower && (
        <S.FriendRequestListBox>
          {data?.fetchFriendRequests.map((el) => (
            <S.FriendRequestList key={el.id} id={el.id}>
              <li>
                <S.Imgbox>
                  {el.sender.image ? (
                    <img src={`https://storage.cloud.google.com/upco-bucket/${el.sender.image}`} />
                  ) : (
                    <S.UserIcon />
                  )}
                </S.Imgbox>
                <p>{el.sender.nickname}</p>
              </li>
              <li>
                <button onClick={onClickAcceptFriendRequest(el.id)}>수락</button>
                <button onClick={onClickRejectFriendRequest(el.id)}>거절</button>
              </li>
            </S.FriendRequestList>
          ))}
        </S.FriendRequestListBox>
      )}

      {selectedComponent === "location" ? (
        <LocationList result={props.result} />
      ) : (
        selectedComponent === "follower" && <FollowerList />
      )}
    </S.Wrapper>
  );
}
