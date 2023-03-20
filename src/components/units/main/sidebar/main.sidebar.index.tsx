import * as S from "./main.sidebar.styles";

export default function MainSideBar(props): JSX.Element {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title
          onClick={props.titleMove(true)}
          style={{ color: props.isTitle ? "#A777B1" : "gray" }}
        >
          내 주변
        </S.Title>
        <S.Title
          onClick={props.titleMove(false)}
          style={{ color: props.isTitle ? "gray" : "#A777B1" }}
        >
          {" "}
          친구 목록
        </S.Title>
      </S.TitleWrapper>

      <S.FollowerWrapper>
        <S.FollowerText onClick={props.followerOpen}>▼ 친구 요청</S.FollowerText>
        <S.FollowerStatus></S.FollowerStatus>
      </S.FollowerWrapper>
      {props.isFollower && (
        <S.FollowerWrapper02>
          <S.FollowerBox>
            <S.FollowerImg></S.FollowerImg>
            <S.FollowerNameBox>
              <div>이진호</div>
              <div>친구 요청보내요~</div>
            </S.FollowerNameBox>
            <div>✓</div>
          </S.FollowerBox>
          <S.FollowerBox>
            <S.FollowerImg></S.FollowerImg>
            <S.FollowerNameBox>
              <div>문성진</div>
              <div>친구 요청보내요~</div>
            </S.FollowerNameBox>
            <div>✓</div>
          </S.FollowerBox>
          <S.FollowerBox>
            <S.FollowerImg></S.FollowerImg>
            <S.FollowerNameBox>
              <div>김덕렬</div>
              <div>친구 요청보내요~</div>
            </S.FollowerNameBox>
            <div>✓</div>
          </S.FollowerBox>
        </S.FollowerWrapper02>
      )}

      {props.isTitle ? (
        <>
          <S.ProfileWrapper>
            <S.ProfileImg></S.ProfileImg>
            <S.ProfileNameWrapper>
              <div>이진호</div>
              <div>20대 후반</div>
            </S.ProfileNameWrapper>
            <S.ProfileInterest>
              <div>축구</div>
              <div>축구</div>
              <div>축구</div>
            </S.ProfileInterest>
          </S.ProfileWrapper>

          <S.ProfileWrapper>
            <S.ProfileImg></S.ProfileImg>
            <S.ProfileNameWrapper>
              <div>문성진</div>
              <div>20대 후반</div>
            </S.ProfileNameWrapper>
            <S.ProfileInterest>
              <div>축구</div>
              <div>축구</div>
              <div>축구</div>
            </S.ProfileInterest>
          </S.ProfileWrapper>
        </>
      ) : (
        <S.FollowerWrapper02>
          <S.FollowerBox>
            <S.FollowerImg></S.FollowerImg>
            <S.FollowerNameBox>
              <div>이진호</div>
              <div>친구 요청보내요~</div>
            </S.FollowerNameBox>
            <div>✓</div>
          </S.FollowerBox>
          <S.FollowerBox>
            <S.FollowerImg></S.FollowerImg>
            <S.FollowerNameBox>
              <div>문성진</div>
              <div>친구 요청보내요~</div>
            </S.FollowerNameBox>
            <div>✓</div>
          </S.FollowerBox>
        </S.FollowerWrapper02>
      )}
    </S.Wrapper>
  );
}
