import { MouseEventHandler, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import TooltipUI02 from "../../commons/items/tooltip/02/tooltip02.index";
import { useRecoilState } from "recoil";
import { roomIdState } from "../../commons/stores";
import { useQueryFetchFriends } from "../../commons/hooks/queries/useQueryFetchFriends";
import * as S from "./styles";

export default function FollowerList(): JSX.Element {
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const { data } = useQueryFetchLoginUser();
  const { data: friendsData } = useQueryFetchFriends();
  const [isOpenToolTip, setIsOpenToolTip] = useState<boolean[]>(
    friendsData?.fetchFriends.map(() => false) ?? []
  );

  const myId = data?.fetchLoginUser.id;

  const onClickChat = (e: MouseEventHandler<HTMLDivElement>): void => {
    const anotherId = e.currentTarget.id;

    const newSocket = io("https://api.upco.space/", {
      path: "/chat/socket.io",
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
                      <S.ImageSection
                        src={`https://storage.cloud.google.com/upco-bucketel.image/${el.image}`}
                      />
                    </S.ImageBox>
                  ) : (
                    <S.ImageBox>
                      <S.UserIcon />
                    </S.ImageBox>
                  )}
                  <S.FollowerListColumn>
                    <S.NickNameSection>{el.nickname}</S.NickNameSection>
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
    </>
  );
}
