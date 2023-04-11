import styled from "@emotion/styled";
import ProfileBody from "./body/profile.body.index";
import ProfileFooter from "./footer/profile.footer.index";
import ProfileHeader from "./header/profile.header.index";

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 50px;
  margin: 0 auto;
`;

export default function ProfileUI(): JSX.Element {
  return (
    <Wrapper>
      <ProfileHeader />
      <ProfileBody />
      <ProfileFooter />
    </Wrapper>
  );
}
