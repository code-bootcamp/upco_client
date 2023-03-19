import { MenuTitle, Wrapper } from "./profile.header.styles";

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <MenuTitle>내 정보</MenuTitle>
      <MenuTitle>프로필 수정</MenuTitle>
      <MenuTitle>문의하기</MenuTitle>
    </Wrapper>
  );
}
