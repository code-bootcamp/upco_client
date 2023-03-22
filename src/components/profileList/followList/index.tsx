import * as S from "./styles";

export default function ProfileFollowListUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>친구삭제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>친구삭제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>친구삭제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>친구삭제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>친구삭제</S.DeleteFollow>
        </li>

        <S.FollowListNoneBox>
          <S.followList>
            <h4>친구목록이 비어있습니다.</h4>
          </S.followList>
        </S.FollowListNoneBox>
      </S.Wrapper>
    </>
  );
}
