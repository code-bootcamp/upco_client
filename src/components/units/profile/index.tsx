import Header from "../../commons/headers/mypage/profile.header.index";
import ProfileBody from "./body/profile.body.index";
import ProfileFooter from "./footer/profile.footer.index";

export default function ProfileUI(): JSX.Element {
  return (
    <>
      <Header></Header>
      <ProfileBody></ProfileBody>
      <ProfileFooter></ProfileFooter>
    </>
  );
}
