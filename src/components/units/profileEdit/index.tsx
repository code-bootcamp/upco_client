import * as S from "./styles";
import ProfileEditBody from "./body/profileEdit.body.index";
import ProfileEditHeader from "./header/profileEdit.header.index";
import Header from "../../commons/headers/mypage/profile.header.index";
import ProfileEditFooter from "./footer/profileEdit.footer.index";

export default function ProfileEditUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Header />
        <ProfileEditHeader />
        <ProfileEditBody />
        <ProfileEditFooter />
      </S.Wrapper>
    </>
  );
}
