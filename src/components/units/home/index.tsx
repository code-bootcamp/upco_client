import HomeBody01 from "./body01/home.body.index";
import HomeBody02 from "./body02/home.body.index";
import HomeHeader from "./header/home.header.index";
import Middle from "./middle/home.body.index";
import Middle2 from "./middle2/home.body.index";

export default function HomeUIPage(): JSX.Element {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeBody01></HomeBody01>
      <Middle></Middle>
      <HomeBody02></HomeBody02>
      <Middle2></Middle2>
    </>
  );
}
