import styled from "@emotion/styled";
import { useState } from "react";
import { io } from "socket.io-client";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import TooltipUI02 from "../../commons/items/tooltip/02/tooltip02.index";
import { useRecoilState } from "recoil";
import { roomIdState } from "../../commons/stores";
import { useQueryFetchFriends } from "../../commons/hooks/queries/useQueryFetchFriends";
import { BiUser } from "react-icons/bi";

const FollowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 300px;

  @media (max-width: 767px) {
    width: 200px;
    padding: 15px;
  }
`;
const NickNameSection = styled.h4`
  font-family: "Bold";
  font-size: 16px;
`;

const ImageBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
`;

const ImageSection = styled.img`
  width: 100%;
  height: 100%;
`;

const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  color: #d2d2d2;
  border-radius: 50px;
`;

const ChatSection = styled.div`
  padding-right: 7px;
  margin-top: 2px;
  color: #b1b1b1;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const FollowerListRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const FollowerListColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

const ToolTipOpen = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  > div {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    margin-right: 5px;
    > div {
      font-size: 14px;
    }
  }
`;

const DottedIcon = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-self: flex-end;
  align-self: flex-start;

  > li {
    width: 3px;
    height: 3px;
    background-color: #979797;
    border-radius: 3px;

    :not(:first-of-type) {
      margin-left: 2px;
    }
  }
`;

export default function FollowerList(): JSX.Element {
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const [socket, setSocket] = useState();
  const { data } = useQueryFetchLoginUser();
  const { data: friendsData } = useQueryFetchFriends();
  console.log(friendsData, "냐하하");

  const myId = data?.fetchLoginUser.id;
  console.log(roomId);

  const onClickChat = (e) => {
    const anotherId = e.currentTarget.id;
    const existingData = localStorage.getItem("anotherIds");
    const newData = { anotherId };

    const newSocket = io("http://10.34.232.105:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });
    newSocket.emit("createRoom", myId, anotherId);
    newSocket.on("roomCreateOrJoin", (roomId) => {
      setRoomId(roomId);
    });
    setSocket(newSocket);

    if (existingData) {
      const parsedData = JSON.parse(existingData);
      if (!parsedData.some((data) => data.anotherId === anotherId)) {
        parsedData.push(newData);
        localStorage.setItem("anotherIds", JSON.stringify(parsedData));
      }
    } else {
      localStorage.setItem("anotherIds", JSON.stringify([newData]));
    }
  };

  return (
    <>
      {friendsData?.fetchFriends.map((el) => (
        <>
          <FollowerWrapper key={el.id} id={el.id} onClick={onClickChat}>
            <FollowerListRow>
              {el.image ? (
                <ImageBox>
                  <ImageSection src={el.image} />
                </ImageBox>
              ) : (
                <ImageBox>
                  <UserIcon />
                </ImageBox>
              )}
              <FollowerListColumn>
                <NickNameSection>{el.nickname}</NickNameSection>
                <ChatSection>안녕하세요안녕하세여안녕하세요안녕하세여</ChatSection>
              </FollowerListColumn>
              {/* <ToolTipOpen>
                <div>. . .</div>
                <TooltipUI02></TooltipUI02>
              </ToolTipOpen> */}
              <DottedIcon>
                <li></li>
                <li></li>
                <li></li>
              </DottedIcon>
            </FollowerListRow>
          </FollowerWrapper>
          <DivideLine />
        </>
      ))}
    </>
  );
}
