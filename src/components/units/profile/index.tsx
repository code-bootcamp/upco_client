import ProfileBody from "./body/profile.body.index";
import ProfileFooter from "./footer/profile.footer.index";
import ProfileHeader from "./header/profile.header.index";

export default function ProfileUI(): JSX.Element {
  return (
    <>
      <ProfileHeader />
      <ProfileBody />
      <ProfileFooter />
    </>
  );
}
