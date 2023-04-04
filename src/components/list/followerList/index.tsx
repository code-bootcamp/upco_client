import { MouseEventHandler, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import TooltipUI02 from "../../commons/items/tooltip/02/tooltip02.index";
import { useRecoilState } from "recoil";
import { roomIdState } from "../../commons/stores";
import { useQueryFetchFriends } from "../../commons/hooks/queries/useQueryFetchFriends";
import * as S from "./styles";
import { useRouter } from "next/router";

const CHECKOUT_PAGE = ["/main"];

export default function FollowerList(): JSX.Element {
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const { data } = useQueryFetchLoginUser();
  const { data: friendsData } = useQueryFetchFriends();
  const [isOpenToolTip, setIsOpenToolTip] = useState<boolean[]>(
    friendsData?.fetchFriends.map(() => false) ?? []
  );
  const router = useRouter();
  const myId = data?.fetchLoginUser.id;
  const mPage = CHECKOUT_PAGE.includes(router.asPath);

  const onClickChat = (e: MouseEventHandler<HTMLDivElement>): void => {
    const anotherId = e.currentTarget.id;

    const newSocket = io("https://api.upco.space/chat/", {
      path: "/socket.io",
      transports: ["websocket"],
    });
    newSocket.emit("createRoom", myId, anotherId);
    newSocket.on("roomCreateOrJoin", (roomId) => {
      setRoomId(roomId);
    });
    setSocket(newSocket);
    setRoomId("");
  };

  const onClickOpenTooltip = (index: number) => () => {
    setIsOpenToolTip((prev) => {
      const newPrev = [...prev];
      newPrev[index] = !newPrev[index];
      return newPrev;
    });
  };

  console.log(friendsData?.fetchFriends);
  return (
    <>
      {friendsData?.fetchFriends.length !== 0 ? (
        <>
          {friendsData?.fetchFriends.map((el, index) => (
            <>
              <S.FollowerWrapper key={el.id} id={el.id} onClick={onClickChat}>
                <S.FollowerListRow>
                  {el.image ? (
                    <S.ImageBox>
                      <S.ImageSection src={el.image} />
                    </S.ImageBox>
                  ) : (
                    <S.ImageBox>
                      <S.UserIcon />
                    </S.ImageBox>
                  )}
                  <S.FollowerListColumn>
                    <S.NickNameSection mPage={mPage}>{el.nickname}</S.NickNameSection>
                    <S.ChatSection>안녕하세요안녕하세여안녕하세요안녕하세여</S.ChatSection>
                  </S.FollowerListColumn>
                  {isOpenToolTip[index] && <TooltipUI02 id={el.id} />}
                  <S.DottedIcon onClick={onClickOpenTooltip(index)}>
                    <li></li>
                    <li></li>
                    <li></li>
                  </S.DottedIcon>
                </S.FollowerListRow>
              </S.FollowerWrapper>
              <S.DivideLine />
            </>
          ))}
        </>
      ) : (
        <S.NoneText>친구목록이 비어있습니다.</S.NoneText>
      )}
      <S.Wrapper mPage={mPage}>
        <S.FollowerWrapper onClick={onClickChat} mPage={mPage}>
          <S.FollowerListRow mPage={mPage}>
            <S.ImageBox>
              <S.UserIcon />
            </S.ImageBox>

            <S.FollowerListColumn>
              <S.NickNameSection mPage={mPage}>최현규</S.NickNameSection>
              <S.ChatSection>안녕하세요안녕하세여안녕하세요안녕하세여</S.ChatSection>
            </S.FollowerListColumn>
            {/* {<TooltipUI02 />} */}
            <S.DottedIcon onClick={onClickOpenTooltip("")}>
              <li></li>
              <li></li>
              <li></li>
            </S.DottedIcon>
          </S.FollowerListRow>
        </S.FollowerWrapper>
        <S.DivideLine mPage={mPage} />

        <S.FollowerWrapper onClick={onClickChat} mPage={mPage}>
          <S.FollowerListRow mPage={mPage}>
            <S.ImageBox>
              <S.UserIcon />
            </S.ImageBox>

            <S.FollowerListColumn>
              <S.NickNameSection mPage={mPage}>문성진</S.NickNameSection>
              <S.ChatSection>안녕하세요안녕하세여안녕하세요안녕하세여</S.ChatSection>
            </S.FollowerListColumn>
            {/* {<TooltipUI02 />} */}
            <S.DottedIcon onClick={onClickOpenTooltip("")}>
              <li></li>
              <li></li>
              <li></li>
            </S.DottedIcon>
          </S.FollowerListRow>
        </S.FollowerWrapper>
        <S.DivideLine mPage={mPage} />

        <S.FollowerWrapper onClick={onClickChat} mPage={mPage}>
          <S.FollowerListRow mPage={mPage}>
            <S.ImageBox>
              <S.UserIcon />
            </S.ImageBox>

            <S.FollowerListColumn>
              <S.NickNameSection mPage={mPage}>김덕렬</S.NickNameSection>
              <S.ChatSection>안녕하세요안녕하세여안녕하세요안녕하세여</S.ChatSection>
            </S.FollowerListColumn>
            {/* {<TooltipUI02 />} */}
            <S.DottedIcon onClick={onClickOpenTooltip("")}>
              <li></li>
              <li></li>
              <li></li>
            </S.DottedIcon>
          </S.FollowerListRow>
        </S.FollowerWrapper>
        <S.DivideLine mPage={mPage} />
      </S.Wrapper>
    </>
  );
}
