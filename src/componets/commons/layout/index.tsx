import LayoutHeader from "./header/header.index";

export default function Layout(props): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
    </>
  );
}
