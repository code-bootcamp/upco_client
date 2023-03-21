import styled from "@emotion/styled";

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
  display: flex;
  flex-direction: column;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
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
      <DivideLine />
      {chatData.map((el) => (
        <>
          <FollowerWrapper key={el._id} id={el._id}>
            <FollowerListRow>
              <ImageSection src={el.images} />
              <FollowerListColumn>
                <NickNameSection>{el.name}</NickNameSection>
                <ChatSection>{chatCut(el.chat, 11)}</ChatSection>
              </FollowerListColumn>
            </FollowerListRow>
          </FollowerWrapper>
          <DivideLine />
        </>
      ))}
    </>
  );
}
