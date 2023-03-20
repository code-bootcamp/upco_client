import styled from "@emotion/styled";

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 250px;
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
  margin: 15px 0px;
`;

interface ChatData {
  _id: string;
  name: string;
  images: string;
  chat: string;
}

const chatData: ChatData[] = [
  {
    _id: "1",
    name: "이진호",
    images: "/images/textChat/emoji.webp",
    chat: "안녕하세요!",
  },
  {
    _id: "2",
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

export default function ChatList(): JSX.Element {
  const chatCut = (str: string, n: number): string => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <>
      {chatData.map((el) => (
        <>
          <ChatWrapper key={el._id} id={el._id}>
            <ChatListRow>
              <ImageSection src={el.images} />
              <ChatListColumn>
                <NickNameSection>{el.name}</NickNameSection>
                <ChatSection>{chatCut(el.chat, 12)}</ChatSection>
              </ChatListColumn>
            </ChatListRow>
          </ChatWrapper>
          <DivideLine />
        </>
      ))}
    </>
  );
}
