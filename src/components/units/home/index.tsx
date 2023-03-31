import HomeBody from "./body/home.body.index";
import HomeHeader from "./header/home.header.index";

export default function HomeUIPage(): JSX.Element {
  return (
    <>
      <HomeHeader />
      <HomeBody />
    </>
  );
}
