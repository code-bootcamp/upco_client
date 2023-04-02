import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_LAYOUT = ["/passwordReset", "/"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const [windowSize, setWindowSize] = useState("");

  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  useEffect(() => {
    window.addEventListener("resize", windowSizeSave);
    return () => {
      window.removeEventListener("resize", windowSizeSave);
    };
  }, []);

  const windowSizeSave = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 500);

  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      <div>{props.children}</div>
      {!isHiddenLayout && typeof window !== "undefined" && windowSize <= 767 && <LayoutFooter />}
    </>
  );
}
