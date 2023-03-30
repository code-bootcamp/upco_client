import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import * as S from "./profileEdit.header.styles";

export default function ProfileEditHeader(): JSX.Element {
  const data = useQueryFetchLoginUser();
  console.log(data.data.fetchLoginUser);
  return (
    <>
      <S.Wrapper>
        <S.ProfileLeft>
          <S.UserIcon />
          <div>
            <S.Name>{data.data.fetchLoginUser.nickname}</S.Name>
            <S.EditImage>이미지 수정</S.EditImage>
          </div>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.Quit>회원탈퇴</S.Quit>
          <S.CreateId>계정 생성 일자: {data.data.fetchLoginUser.createAt.slice(0, 10)}</S.CreateId>
        </S.ProfileRight>
      </S.Wrapper>
    </>
  );
}
