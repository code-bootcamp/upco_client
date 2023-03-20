import { useRouter } from "next/router";
import * as S from "./profile.body.styles";

export default function ProfileBody(): JSX.Element {
  const router = useRouter();

  const onClickEdit = (): void => {
    void router.push("/profile/profileEdit");
  };

  return (
    <S.Wrapper>
      <S.InWrapper>
        <S.LeftWrapper></S.LeftWrapper>
        <S.RightWrapper>
          <S.TopWrapper>
            <div>문성진</div>
            <div>20대 중반</div>
          </S.TopWrapper>
          <S.MiddleWrapper>eggmun98@gamil.com</S.MiddleWrapper>
          <S.BottomWrapper>
            <S.InterestBox>축구</S.InterestBox>
            <S.InterestBox>농구</S.InterestBox>
            <S.InterestBox>야구</S.InterestBox>
          </S.BottomWrapper>
        </S.RightWrapper>
      </S.InWrapper>
      <S.LastWrapper>
        <div onClick={onClickEdit}>프로필 수정</div>
        <img src="imgtest"></img>
      </S.LastWrapper>
    </S.Wrapper>
  );
}
