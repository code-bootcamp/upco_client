import { useRouter } from "next/router";
import LayoutHeader from "./header/header.index";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_LAYOUT = ["/passwordReset"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      <div>{props.children}</div>
    </>
  );
}
