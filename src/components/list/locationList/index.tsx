import { AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useOnClickCreateFriendRequest } from "../../commons/hooks/customs/useOnClickCreateFriendRequest";
import * as S from "./styles";

export default function LocationList(props): JSX.Element {
  const { onClickCreateFriendRequest } = useOnClickCreateFriendRequest();

  return (
    <>
      <S.Wrapper>
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
                <S.InterestSection>축구</S.InterestSection>
                <S.InterestSection>축구</S.InterestSection>
                <S.InterestSection>축구</S.InterestSection>
              </S.InterestBox>
              <S.ButtonWrapper>
                <S.HoverButton>
                  <AiOutlineMessage />
                  <S.HoverTitle>채팅하기</S.HoverTitle>
                </S.HoverButton>
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
        <S.LocationWrapper>
          <S.ImageColumn>
            <S.ImageSection src="images/upco/upco01.JPG" />
          </S.ImageColumn>

          <S.LocationListColumn>
            <S.LocationListRow>
              <S.NickNameSection>최현규</S.NickNameSection>
              <S.AgeSection>27</S.AgeSection>
            </S.LocationListRow>
            <S.InterestBox>
              {/* <S.InterestSection key={idx}>{interest}</S.InterestSection>  */}
              <S.InterestSection>보드</S.InterestSection>
              <S.InterestSection>코딩</S.InterestSection>
              <S.InterestSection>수영</S.InterestSection>
            </S.InterestBox>
            <S.ButtonWrapper>
              <S.HoverButton>
                <AiOutlineMessage />
                <S.HoverTitle>채팅하기</S.HoverTitle>
              </S.HoverButton>
              <S.HoverButton onClick={onClickCreateFriendRequest("")}>
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

        <S.LocationWrapper>
          <S.ImageColumn>
            <S.ImageSection src="images/upco/upco02.JPG" />
          </S.ImageColumn>

          <S.LocationListColumn>
            <S.LocationListRow>
              <S.NickNameSection>문성진</S.NickNameSection>
              <S.AgeSection>26</S.AgeSection>
            </S.LocationListRow>
            <S.InterestBox>
              {/* <S.InterestSection key={idx}>{interest}</S.InterestSection>  */}
              <S.InterestSection>축구</S.InterestSection>
              <S.InterestSection>농구</S.InterestSection>
              <S.InterestSection>야구</S.InterestSection>
            </S.InterestBox>
            <S.ButtonWrapper>
              <S.HoverButton>
                <AiOutlineMessage />
                <S.HoverTitle>채팅하기</S.HoverTitle>
              </S.HoverButton>
              <S.HoverButton onClick={onClickCreateFriendRequest("")}>
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

        <S.LocationWrapper>
          <S.ImageColumn>
            <S.ImageSection src="images/upco/upco03.JPG" />
          </S.ImageColumn>

          <S.LocationListColumn>
            <S.LocationListRow>
              <S.NickNameSection>김덕렬</S.NickNameSection>
              <S.AgeSection>32</S.AgeSection>
            </S.LocationListRow>
            <S.InterestBox>
              {/* <S.InterestSection key={idx}>{interest}</S.InterestSection>  */}
              <S.InterestSection>수학</S.InterestSection>
              <S.InterestSection>코딩</S.InterestSection>
              <S.InterestSection>영화</S.InterestSection>
            </S.InterestBox>
            <S.ButtonWrapper>
              <S.HoverButton>
                <AiOutlineMessage />
                <S.HoverTitle>채팅하기</S.HoverTitle>
              </S.HoverButton>
              <S.HoverButton onClick={onClickCreateFriendRequest("")}>
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
      </S.Wrapper>
    </>
  );
}
