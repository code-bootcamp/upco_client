import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import * as S from "./main.sidebar.styels";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import { IProps } from "./main.sidebar.types";
import { onClickLogoutMode } from "../../../commons/hooks/customs/onClickLogoutMode";
import { useQueryFetchFriendRequests } from "../../../commons/hooks/queries/useQueryFetchFriendRequests";
import { useRecoilState } from "recoil";
import { isFollowerState } from "../../../commons/stores";
import { mainFooterMode } from "../../../commons/hooks/customs/mainFooterMode";
import {
  FriendRequestList,
  FriendRequestListBox,
  Imgbox,
  UserIcon,
} from "../footer/main.footer.styles";
import { useOnClickAcceptFriendRequest } from "../../../commons/hooks/customs/useOnClickAcceptFriendRequest";
import { useOnClickRejectFriendRequest } from "../../../commons/hooks/customs/useOnClickRejectFriendRequest";

export default function MainSideBar(props: IProps): JSX.Element {
  const { data } = useQueryFetchLoginUser(); // 내 프로필 정보
  const { data: friendData } = useQueryFetchFriendRequests(); // 친구 요청 목록
  const [isFollower] = useRecoilState(isFollowerState); // 친구 요청 목록

  const { followerOpen } = mainFooterMode();
  const { onClickAcceptFriendRequest } = useOnClickAcceptFriendRequest();
  const { onClickRejectFriendRequest } = useOnClickRejectFriendRequest();
  const { onClickMovePage } = movePageMode(); // 페이지 이동 함수
  const { onClickLogout } = onClickLogoutMode(); // 로그아웃 함수

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.FixStyled onClick={props.onClickIsOpen}></S.FixStyled>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ImgWrapper>
          <S.ImgBox
            src={`https://storage.cloud.google.com/upco-bucket${
              data?.fetchLoginUser?.image as string
            }`}
          ></S.ImgBox>
        </S.ImgWrapper>
        <S.TextWrapper>
          <li>
            <h4>{data?.fetchLoginUser.nickname}</h4>
            <p>{data?.fetchLoginUser.age}</p>
          </li>
          <li>
            <p>{data?.fetchLoginUser.email}</p>
          </li>
        </S.TextWrapper>
      </S.BottomWrapper>
      <S.ModeWrapper>
        <li>
          {friendData?.fetchFriendRequests.length !== 0 && (
            <button onClick={followerOpen}>친구요청</button>
          )}
        </li>
        <li>
          {isFollower && (
            <FriendRequestListBox>
              {friendData?.fetchFriendRequests.map((el) => (
                <FriendRequestList key={el.id} id={el.id}>
                  <li>
                    <Imgbox>
                      {el.sender.image ? (
                        <img
                          src={`https://storage.cloud.google.com/upco-bucket/${el.sender.image}`}
                        />
                      ) : (
                        <UserIcon />
                      )}
                    </Imgbox>
                    <p>{el.sender.nickname}</p>
                  </li>
                  <li>
                    <button onClick={onClickAcceptFriendRequest(el.id)}>수락</button>
                    <button onClick={onClickRejectFriendRequest(el.id)}>거절</button>
                  </li>
                </FriendRequestList>
              ))}
            </FriendRequestListBox>
          )}
        </li>
        <li onClick={onClickMovePage("/profile")}>
          <button>내 정보</button>
        </li>
        <li>
          <button>이미지 변경</button>
        </li>
        <li onClick={onClickMovePage("/notice")}>
          <button>고객 센터</button>
          <button onClick={onClickLogout}>로그아웃</button>
        </li>
      </S.ModeWrapper>
    </S.Wrapper>
  );
}
