import { useState } from "react";
import * as S from "./home.header.styles";

export default function HomeHeader(): JSX.Element {
  const [isNext, setIsNext] = useState(0);

  const NextButton = (event) => {
    if (event.key === "Enter") {
      alert("다음인풋이동");
      setIsNext(isNext + 1);
    }
  };

  return (
    <S.Wrapper>
      <div>
        <S.Title01>'엎'드리면 '코'닿는 거리에서</S.Title01>

        <S.Title02>만날 수 있는 사람들을</S.Title02>
        <S.Title03>엎코에서 만나보세요!</S.Title03>
        <div>
          {(isNext === 0 && (
            <S.Input01 onKeyDown={NextButton} placeholder="이메일을 입력하세요."></S.Input01>
          )) ?? <S.Input01 onKeyDown={NextButton} placeholder="비밀번호를 입력하세요."></S.Input01>}
          <S.Button01>UpCo</S.Button01>
        </div>
      </div>
    </S.Wrapper>
  );
}
