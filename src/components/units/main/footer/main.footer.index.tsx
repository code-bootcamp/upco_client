import * as S from "./main.footer.styles";
import FollowerList from "../../../list/followerList";
import LocationList from "../../../list/locationList";
import { isFollowerState, isOpenState, selectedComponentState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import { useQueryFetchFriendRequests } from "../../../commons/hooks/queries/useQueryFetchFriendRequests";
import { useOnClickAcceptFriendRequest } from "../../../commons/hooks/customs/useOnClickAcceptFriendRequest";
import { useOnClickRejectFriendRequest } from "../../../commons/hooks/customs/useOnClickRejectFriendRequest";
import { IProps } from "./main.footer.types";
import { mainFooterMode } from "../../../commons/hooks/customs/mainFooterMode";

export default function MainFooter(props: IProps): JSX.Element {
  const [isOpen] = useRecoilState(isOpenState);
  const [selectedComponent] = useRecoilState(selectedComponentState);
  const [isFollower] = useRecoilState(isFollowerState);

  const { data } = useQueryFetchFriendRequests();
  const { onClickAcceptFriendRequest } = useOnClickAcceptFriendRequest();
  const { onClickRejectFriendRequest } = useOnClickRejectFriendRequest();
  const { handleChatClick, handleFollowerClick, followerOpen } = mainFooterMode();

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
