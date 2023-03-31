import { useState } from "react";
import FindUI from "../../commons/items/modal/find/find.index";
import JoinUI from "../../commons/items/modal/join/join.index";
import LoginUI from "../../commons/items/modal/login/login.index";
import HomeBody from "./body/home.body.index";
import HomeHeader from "./header/home.header.index";

export default function HomeUIPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoin, setIsJoin] = useState(false);
  const [isFind, setIsFind] = useState(false);

  const onClickOpen = (open: string) => (): void => {
    if (open === "login") {
      setIsOpen((prev) => !prev);
    } else if (open === "join") {
      setIsJoin((prev) => !prev);
    }
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} setIsJoin={setIsJoin} setIsFind={setIsFind} />}
      {isJoin && <JoinUI setIsJoin={setIsJoin} setIsOpen={setIsOpen} />}
      {isFind && <FindUI setIsOpen={setIsOpen} setIsFind={setIsFind} />}
      <HomeHeader onClickOpen={onClickOpen} />
      <HomeBody onClickOpen={onClickOpen} />
    </>
  );
}
