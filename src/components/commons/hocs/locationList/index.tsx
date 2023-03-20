import { AiOutlineMessage } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import styled from "@emotion/styled";

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    button {
      display: block;
    }
  }
`;

const ImageSection = styled.img`
  width: 80%;
  height: 150px;
  margin-top: 10px;
  z-index: -1;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NickNameSection = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 10px 0px 0px;
`;

const AgeSection = styled.div`
  color: #b1b1b1;
  margin-top: 10px;
`;

const InterestSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #a2a0eb;
  padding: 3px 18px;
  height: 25px;
  color: #fff;
  margin: 5px 5px 0px 0px;
  z-index: -1;
`;

const LocationListRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 0px 10px 20px;
`;

const LocationListColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HoverButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #b8a5ee;
  border: none;
  border-radius: 50px;
  color: #fff;
  margin-right: 10px;
  font-size: 30px;
  display: none;
  margin: 15px;
  padding-top: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const HoverTitle = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

interface LocationData {
  _id: string;
  name: string;
  images: string;
  age: string;
  interest: string[];
}

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
  return (
    <>
      {locationList.map((el) => (
        <LocationWrapper key={el._id} id={el._id}>
          <ImageColumn>
            <ImageSection src={el.images} />
          </ImageColumn>

          <LocationListColumn>
            <LocationListRow>
              <NickNameSection>{el.name}</NickNameSection>
              <AgeSection>{el.age}</AgeSection>
            </LocationListRow>
            <LocationListRow>
              {el.interest.map((interest) => (
                <InterestSection key={el._id}>{interest}</InterestSection>
              ))}
            </LocationListRow>
            <ButtonWrapper>
              <HoverButton>
                <AiOutlineMessage />
                <HoverTitle> 채팅하기</HoverTitle>
              </HoverButton>
              <HoverButton>
                <RiAlarmWarningLine />
                <HoverTitle>신고하기</HoverTitle>
              </HoverButton>
            </ButtonWrapper>
          </LocationListColumn>
          <DivideLine />
        </LocationWrapper>
      ))}
    </>
  );
}
