import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useAddFriend } from "../../commons/hooks/customs/useAddFriend";
import * as S from "./styles";

export default function LocationList(props): JSX.Element {
  const { onClickAddFriend } = useAddFriend();

  return (
    <>
      {props.data?.findAroundUsers.map((el) => (
        <S.LocationWrapper key={el.id}>
          <S.ImageColumn>
            <S.ImageSection src={el.image} />
          </S.ImageColumn>

          <S.LocationListColumn>
            <S.LocationListRow>
              <S.NickNameSection>{el.nickname}</S.NickNameSection>
              <S.AgeSection>{el.age}</S.AgeSection>
            </S.LocationListRow>
            <S.InterestBox>
              {/* <S.InterestSection key={idx}>{interest}</S.InterestSection>  */}
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
