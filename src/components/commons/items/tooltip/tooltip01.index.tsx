import * as S from "./tooltip01.styles";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { RiQuestionAnswerLine } from "react-icons/ri";

export default function TooltipUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.RoomWrapper>
          <BsGear></BsGear>
          <div>내 정보</div>
        </S.RoomWrapper>
        <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <div>Q & A</div>
        </S.RoomWrapper>
        <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <RxExit></RxExit>
          <div>로그아웃</div>
        </S.RoomWrapper>
      </S.Wrapper>
    </>
  );
}
