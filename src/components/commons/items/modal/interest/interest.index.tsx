import { useState } from "react";
import * as S from "./interest.styles";

interface InterestUIProps {
  setIsModalOpen: (value: boolean) => void;
  setInterestList: (value: string[]) => void;
}

const interestMeeting = [
  "INTJ",
  "INTP",
  "INFJ",
  "INFP",
  "ISTJ",
  "ISFJ",
  "ISTP",
  "ISFP",
  "ENTJ",
  "ENTP",
  "ENFJ",
  "ENFP",
  "ESTJ",
  "ESFJ",
  "ESTP",
  "ESFP",
  "헬스",
  "스케이트보드",
  "전자기기",
  "노래",
  "영화",
  "드라마",
  "패션",
  "댄스",
  "뮤지컬",
  "전시회",
  "산책",
  "등산",
  "맛집",
  "카페",
  "연예인",
  "주식",
  "게임",
  "드라이브",
  "여행",
];

export default function InterestUI(props: InterestUIProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const onClickClose = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickPush = (el: string) => () => {
    const index = selectedInterests.indexOf(el);
    if (index === -1) {
      setSelectedInterests((prev) => [...prev, el]);
    } else {
      setSelectedInterests((prev) => prev.filter((item) => item !== el));
    }
  };

  const onClickComplete = (): void => {
    props.setInterestList(selectedInterests);
    props.setIsModalOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <>
          <S.Background onClick={onClickClose} />
          <S.Wrapper>
            <S.Close onClick={onClickClose} />
            <S.InterestText>
              <span>
                <p>관심사</p>를 선택해주세요.
              </span>
            </S.InterestText>
            <S.DivideLine></S.DivideLine>
            <S.InterestWrapper>
              {interestMeeting.map((el) => (
                <S.InterestBox
                  key={el}
                  onClick={onClickPush(el)}
                  selected={selectedInterests.includes(el)}
                >
                  {el}
                </S.InterestBox>
              ))}
            </S.InterestWrapper>
            <S.InterestButton selected={true} onClick={onClickComplete}>
              선택 완료
            </S.InterestButton>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
