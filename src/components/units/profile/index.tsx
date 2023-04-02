import styled from "@emotion/styled";
import ProfileBody from "./body/profile.body.index";
import ProfileFooter from "./footer/profile.footer.index";
import ProfileHeader from "./header/profile.header.index";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 50px;
  }
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
