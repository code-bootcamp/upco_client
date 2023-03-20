import styled from "@emotion/styled";

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap; /* 추가 */

  width: 250px;
`;
const ImageSection = styled.img`
  width: 230px;
  height: 150px;
`;

const NickNameSection = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const AgeSection = styled.div`
  color: #b1b1b1;
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
`;

const LocationListRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const LocationListColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  margin: 18px 0px;
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
    images: "/images/textChat/emoji.webp",
    age: "20대 후반",
    interest: ["축구", "수영"],
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
        <>
          <LocationWrapper key={el._id} id={el._id}>
            <ImageSection src={el.images} />
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
            </LocationListColumn>
          </LocationWrapper>
          <DivideLine />
        </>
      ))}
    </>
  );
}
