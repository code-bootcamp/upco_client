import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useOnClickCreateFriendRequest } from "../../commons/hooks/customs/useOnClickCreateFriendRequest";
import * as S from "./styles";
import { IProps } from "./types";

export default function LocationList(props: IProps): JSX.Element {
  const { onClickCreateFriendRequest } = useOnClickCreateFriendRequest();

  console.log("로케이션 페이지-유저 위치", props.result.data?.findAroundUsers);

  return (
    <>
      <S.Wrapper>
        {props.result.data?.findAroundUsers.map((el) => (
          <S.LocationWrapper key={el.id}>
            <S.ImageColumn>
              {el.image ? (
                <S.ImageSection
                  src={`https://storage.cloud.google.com/upco-bucket/${String(el.image)}`}
                />
              ) : (
                <S.UserIcon />
              )}
            </S.ImageColumn>

            <S.LocationListColumn>
              <S.LocationListRow>
                <S.NickNameSection>{el.nickname}</S.NickNameSection>
                {el.age ? <S.AgeSection>{el.age}살</S.AgeSection> : <></>}
              </S.LocationListRow>
              <S.InterestBox>
                {el.interests?.map((item) => (
                  <S.InterestSection key={item.id}>{item.name}</S.InterestSection>
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
