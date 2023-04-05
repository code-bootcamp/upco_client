import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useOnClickCreateFriendRequest } from "../../commons/hooks/customs/useOnClickCreateFriendRequest";
import * as S from "./styles";

export default function LocationList(props): JSX.Element {
  const { onClickCreateFriendRequest } = useOnClickCreateFriendRequest();

  return (
    <>
      <S.Wrapper>
        {props.data?.findAroundUsers.map((el, idx) => (
          <S.LocationWrapper key={el.id}>
            <S.ImageColumn>
              <S.ImageSection src={`https://storage.cloud.google.com/upco-bucket/${el.image}`} />
            </S.ImageColumn>

            <S.LocationListColumn>
              <S.LocationListRow>
                <S.NickNameSection>{el.nickname}</S.NickNameSection>
                <S.AgeSection>{el.age}살</S.AgeSection>
              </S.LocationListRow>
              <S.InterestBox>
                {el.interests &&
                  el.interests.map((item: string) => (
                    <S.InterestSection key={idx}>{item}</S.InterestSection>
                  ))}
              </S.InterestBox>
              <S.ButtonWrapper>
                {/* <S.HoverButton>
                  <AiOutlineMessage />
                  <S.HoverTitle>채팅하기</S.HoverTitle>
                </S.HoverButton> */}
                <S.HoverButton onClick={onClickCreateFriendRequest(el.id)}>
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
      </S.Wrapper>
    </>
  );
}
