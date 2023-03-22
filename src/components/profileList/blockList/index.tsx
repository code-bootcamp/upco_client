import * as S from "./styles";

export default function ProfileBlockListUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>차단해제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>차단해제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>차단해제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>차단해제</S.DeleteFollow>
        </li>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow>차단해제</S.DeleteFollow>
        </li>

        <S.BlockListNoneBox>
          <S.BlockList>
            <h4>차단한 유저가 없습니다.</h4>
          </S.BlockList>
        </S.BlockListNoneBox>
      </S.Wrapper>
    </>
  );
}
