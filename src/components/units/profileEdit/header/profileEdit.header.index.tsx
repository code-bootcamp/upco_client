import * as S from "./profileEdit.header.styles";

export default function ProfileEditHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        {/* 프로필 */}
        <S.ProfileLeft>
          <S.UserIcon />
          <div>
            <S.Name>문성진</S.Name>
            <S.EditImage>이미지 수정</S.EditImage>
          </div>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.Quit>회원탈퇴</S.Quit>
          <S.CreateId>계정 생성 일자: 2023-03-14</S.CreateId>
        </S.ProfileRight>
      </S.Wrapper>
    </>
  );
}
