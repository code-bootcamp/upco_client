import { useState } from "react";
import ProfileBlockListUI from "../../../profileList/blockList";
import ProfileFollowListUI from "../../../profileList/followList";
import * as S from "./profile.footer.styles";

export default function ProfileFooter(): JSX.Element {
  const [isSelector, setIsSelector] = useState("follow");

  const handleList = (str: string) => (): void => {
    setIsSelector(str);
  };

  return (
    <>
      <S.Wrapper>
        <div>
          <S.Title onClick={handleList("follow")} isSelector={isSelector}>
            친구 목록
          </S.Title>
          <S.Title onClick={handleList("block")} isSelector={isSelector}>
            차단 유저 목록
          </S.Title>
        </div>
        {(isSelector === "follow" && <ProfileFollowListUI />) ||
          (isSelector === "block" && <ProfileBlockListUI />)}
      </S.Wrapper>
    </>
  );
}
