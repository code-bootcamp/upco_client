import styled from "@emotion/styled";
import { useState } from "react";
import { io } from "socket.io-client";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import TooltipUI02 from "../../commons/items/tooltip/02/tooltip02.index";
import { useRecoilState } from "recoil";
import { roomIdState } from "../../commons/stores";

const FollowerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 18px;
  width: 300px;
`;
const NickNameSection = styled.div`
  font-weight: bold;
`;
const ImageSection = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
const ChatSection = styled.div`
  color: #b1b1b1;
  font-size: 14px;
`;
const FollowerListRow = styled.div`
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
`;

interface ChatData {
  _id: string;
  name: string;
  images: string;
  chat: string;
}

const chatData: ChatData[] = [
  {
    _id: "14792c39-3340-4d69-93cf-fbb0dd433910",
    name: "이진호",
    images: "/images/textChat/emoji.webp",
    chat: "안녕하세요!",
  },
  {
    _id: "04df9e3b-cc46-4b51-96a0-f70e9bbe3037",
    name: "문성진",
    images: "/images/textChat/faceChat.webp",
    chat: "반갑습니다!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
  },
  {
    _id: "3",
    name: "최현규",
    images: "/images/textChat/image.webp",
    chat: "안녕하세요! 반갑습니다!!ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
  },
];

export default function FollowerList(): JSX.Element {
  const [roomId, setRoomId] = useRecoilState(roomIdState);
  const [socket, setSocket] = useState();
  const data = useQueryFetchLoginUser();
  const chatCut = (str: string, n: number): string => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const myId = data.data.fetchLoginUser.id;
  // console.log(roomId);
  const onClickChat = (e) => {
    const anotherId = e.currentTarget.id;
    const newSocket = io("http://10.34.233.75:4000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });
    newSocket.emit("createRoom", myId, anotherId);
    newSocket.on("roomCreateOrJoin", (roomId) => {
      setRoomId(roomId);
    });
    setSocket(newSocket);
  };

  return (
    <>
      {chatData.map((el) => (
        <>
          <FollowerWrapper key={el._id} id={el._id} onClick={onClickChat}>
            <FollowerListRow>
              <ImageSection src={el.images} />
              <FollowerListColumn>
                <NickNameSection>{el.name}</NickNameSection>
                <ChatSection>{chatCut(el.chat, 11)}</ChatSection>
              </FollowerListColumn>
              <ToolTipOpen>
                <div>. . .</div>
                <TooltipUI02></TooltipUI02>
              </ToolTipOpen>
            </FollowerListRow>
          </FollowerWrapper>
          <DivideLine />
        </>
      ))}
    </>
  );
}
