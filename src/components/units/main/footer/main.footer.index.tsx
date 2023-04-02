import * as S from "./main.footer.styles";
import { useState } from "react";
import FollowerList from "../../../list/followerList";
import LocationList from "../../../list/locationList";
import { isOpenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import { useQueryFetchFriendRequests } from "../../../commons/hooks/queries/useQueryFetchFriendRequests";
import { useOnClickAcceptFriendRequest } from "../../../commons/hooks/customs/useOnClickAcceptFriendRequest";
import { useOnClickRejectFriendRequest } from "../../../commons/hooks/customs/useOnClickRejectFriendRequest";

export default function MainFooter(props): JSX.Element {
  const { data } = useQueryFetchFriendRequests();
  const [isOpen] = useRecoilState(isOpenState);
  const { onClickAcceptFriendRequest } = useOnClickAcceptFriendRequest();
  const { onClickRejectFriendRequest } = useOnClickRejectFriendRequest();

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

  console.log(data);

  return (
    <S.Wrapper isOpen={isOpen}>
      {/* {typeof window !== "undefined" && window.innerHeight <= 767 && (
        <S.UserBox>
          <S.UserIcon></S.UserIcon>
        </S.UserBox>
      )} */}

      <S.ChatFooterTitle>
        <S.ChatTitle selected={selectedComponent === "location"} onClick={handleChatClick}>
          내 주변
        </S.ChatTitle>
        <S.FollowerTitle selected={selectedComponent === "follower"} onClick={handleFollowerClick}>
          친구 목록
        </S.FollowerTitle>
      </S.ChatFooterTitle>

      <S.DivideLine />
      {data?.fetchFriendRequests.length !== 0 && (
        <S.FollowList onClick={followerOpen}>친구 요청</S.FollowList>
      )}
      <S.DivideLine />
      {isFollower && (
        <S.FriendRequestListBox>
          {data?.fetchFriendRequests.map((el) => (
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
          ))}
        </S.FriendRequestListBox>
      )}
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
