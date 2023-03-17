import LayoutHeader from "./header/header.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
    </>
  );
}
