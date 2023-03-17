import * as S from "./styles";
import ProfileEditBody from "./body/profileEdit.body.index";
import ProfileEditHeader from "./header/profileEdit.header.index";

export default function ProfileEditUI(): JSX.Element {
  return (
    <S.Wrapper>
      <ProfileEditHeader />
      <ProfileEditBody />
    </S.Wrapper>
  );
}
