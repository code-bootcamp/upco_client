import { useState } from "react";
import * as S from "./interest.styles";

const interestMeeting = [
  "축구",
  "농구",
  "야구",
  "수영",
  "등산",
  "그림",
  "술",
  "맛집 탐방",
  "레저 스포츠",
  "영화 감상",
  "음악 감상",
  "독서",
  "뮤지컬",
  "연극",
  "스카이 다이빙",
  "스케이트 보드",
  "연주회",
  "요리",
  "공부",
];

export default function InterestUI(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onClickClose = (): void => {
    setIsOpen((prev) => !prev);
  };

  const interestBox = [];

  const onClickPush = (el: string) => () => {
    interestBox.push(el);
    alert();
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
                <S.InterestBox key={el} onClick={onClickPush(el)}>
                  {el}
                </S.InterestBox>
              ))}
            </S.InterestWrapper>
            <S.InterestButton>선택 완료</S.InterestButton>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
