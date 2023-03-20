import { useState } from "react";
import LoginUI from "../../items/modal/login/login.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onClickLogin = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} />}
      <S.Wrapper>
        <img src="/images/layout/logo.svg" alt="로고" />
        <div onClick={onClickLogin}></div>
      </S.Wrapper>
    </>
  );
}
