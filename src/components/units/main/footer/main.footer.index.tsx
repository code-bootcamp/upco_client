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

const CHECKOUT_PAGE = ["/main"];

export default function MainFooter(props): JSX.Element {
  // const { data } = useQueryFetchFriendRequests();
  const [isOpen] = useRecoilState(isOpenState);
  const [isClose, setIsClose] = useRecoilState(isCloseState);

  // const { onClickAcceptFriendRequest } = useOnClickAcceptFriendRequest();
  // const { onClickRejectFriendRequest } = useOnClickRejectFriendRequest();

  const [selectedComponent, setSelectedComponent] = useState("location");
  const [isFollower, setIsFollower] = useState(false);

  const router = useRouter();
  const checkoutPage = CHECKOUT_PAGE.includes(router.asPath);

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
      {/* {typeof window !== "undefined" && window.innerHeight <= 767 && (
        <S.UserBox>
          <S.UserIcon></S.UserIcon>
        </S.UserBox>
      )} */}
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

        {/* {data?.fetchFriendRequests.length !== 0 && (
          <S.FollowList onClick={followerOpen} isOpen={isOpen}>
            친구 요청
          </S.FollowList>
        )} */}
      </S.SubWrapper>
      <S.DivideLine />
      {isFollower && (
        <S.FriendRequestListBox>
          {/* {data?.fetchFriendRequests.map((el) => (
            <S.FriendRequestList key={el.id} id={el.id}>
              <li>
                <S.Imgbox>
                  {el.sender.image ? <img src={el.sender.image} /> : <S.UserIcon />}
                </S.Imgbox>
                <p>{el.sender.nickname}</p>
              </li>
              <li>
                <button onClick={onClickAcceptFriendRequest(el.id)}>수락</button>
                <button onClick={onClickRejectFriendRequest(el.id)}>거절</button>
              </li>
            </S.FriendRequestList>
          ))} */}
        </S.FriendRequestListBox>
      )}

      {selectedComponent === "location" ? (
        <LocationList data={props.data} />
      ) : (
        selectedComponent === "follower" && <FollowerList />
      )}
    </S.Wrapper>
  );
}
