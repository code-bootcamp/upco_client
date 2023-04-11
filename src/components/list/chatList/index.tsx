import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/fetchLoginUser";
import { useQueryFetchUser } from "../../commons/hooks/queries/useQueryFetchUser";

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 18px;
  width: 300px;
  @media (max-width: 767px) {
    width: 200px;
    padding: 15px 0px 15px 13px;
  }
`;
const NickNameSection = styled.div`
  font-weight: bold;
`;
const ImageSection = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;
const ChatSection = styled.div`
  color: #b1b1b1;
  font-size: 14px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const ChatListRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const ChatListColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

const Btn = styled.button``;

export default function ChatList(): JSX.Element {
  const [chatRooms, setChatRooms] = useState([]);
  const [chatData, setChatData] = useState([]);
  const data = useQueryFetchLoginUser();
  const userData = useQueryFetchUser();

  useEffect(() => {
    const fetchChatRooms = async (): Promise<void> => {
      try {
        const result = await axios.get(
          `https://api.upco.space/chat/chatRoomList/${data.data?.fetchLoginUser.id}`
        );

        const latestMessages = result.data.data.reduce((acc, cur) => {
          if (!acc[cur.receiverId]) {
            acc[cur.receiverId] = [];
          }
          acc[cur.receiverId].push(cur);

          return acc;
        }, {});

        const latestMessagesArray = Object.values(latestMessages).map((group) => {
          return group.reduce((acc, cur) => {
            if (acc.createdAt < cur.createdAt) {
              return cur;
            }
            return acc;
          });
        });
        setChatData(latestMessagesArray);
      } catch (error) {
        alert(error);
      }
    };
    fetchChatRooms().catch(() => {});
  }, []);
  return (
    <>
      <DivideLine />
      <ChatWrapper>
        {chatData.map((room) => (
          <ChatListRow key={room.id}>
            <ImageSection />

            <ChatListColumn>
              <NickNameSection>{room.receiverId}</NickNameSection>
              <ChatSection></ChatSection>
            </ChatListColumn>
          </ChatListRow>
        ))}
      </ChatWrapper>
      <DivideLine />
    </>
  );
}
