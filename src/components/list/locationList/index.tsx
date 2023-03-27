import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useAddFriend } from "../../commons/hooks/customs/useAddFriend";
import * as S from "./styles";
import { LocationData } from "./types";

const locationList: LocationData[] = [
  {
    _id: "1",
    name: "이진호",
    images: "/images/textChat/photo.png",
    age: "20대 후반",
    interest: ["축구", "수영", "수영", "수영ㅁㅁㅁㅁ"],
  },
  {
    _id: "2",
    name: "문성진",
    images: "/images/textChat/faceChat.webp",
    age: "20대 중반",
    interest: ["축구", "농구"],
  },
  {
    _id: "3",
    name: "최현규",
    images: "/images/textChat/image.webp",
    age: "20대 중반",
    interest: ["축구"],
  },
];

export default function LocationList(): JSX.Element {
  const { onClickAddFriend } = useAddFriend();

  return (
    <>
      {locationList.map((el) => (
        <S.LocationWrapper key={el._id}>
          <S.ImageColumn>
            <S.ImageSection src={el.images} />
          </S.ImageColumn>

          <S.LocationListColumn>
            <S.LocationListRow>
              <S.NickNameSection>{el.name}</S.NickNameSection>
              <S.AgeSection>{el.age}</S.AgeSection>
            </S.LocationListRow>
            <S.InterestBox>
              {el.interest.map((interest, idx) => (
                <S.InterestSection key={idx}>{interest}</S.InterestSection>
              ))}
            </S.InterestBox>
            <S.ButtonWrapper>
              <S.HoverButton>
                <AiOutlineMessage />
                <S.HoverTitle>채팅하기</S.HoverTitle>
              </S.HoverButton>
              <S.HoverButton onClick={onClickAddFriend}>
                <AiOutlineUserAdd />
                <S.HoverTitle>친구추가</S.HoverTitle>
              </S.HoverButton>
              <S.HoverButton>
                <RiAlarmWarningLine />
                <S.HoverTitle>신고하기</S.HoverTitle>
              </S.HoverButton>
            </S.ButtonWrapper>
          </S.LocationListColumn>
          <S.DivideLine />
        </S.LocationWrapper>
      ))}
    </>
  );
}
