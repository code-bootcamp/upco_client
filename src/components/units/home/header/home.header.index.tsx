import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginMode } from "../../../commons/hooks/customs/useLoginMode";
import * as S from "./home.header.styles";

export default function HomeHeader(): JSX.Element {
  const [isNext, setIsNext] = useState(0);
  // const inputRef = useRef(null);
  // const inputRef02 = useRef(null);

  const NextButton = (event) => {
    if (event.key === "Enter") {
      setIsNext(isNext + 1);
    }
  };

  const NextButton02 = () => {
    setIsNext(isNext + 1);
  };

  const { register, handleSubmit } = useForm();
  const { onSubmit } = useLoginMode();

  // useEffect(() => {
  //   if (isNext === 0 && inputRef.current) {
  //     inputRef.current.focus();
  //   } else if (isNext === 1 && inputRef02.current) {
  //     inputRef02.current.focus();
  //   }
  // }, [isNext]);

  return (
    <S.Wrapper>
      <div>
        <S.Title01>'엎'어지면 '코'닿을 거리에서</S.Title01>
        <S.Title02>만날 수 있는 사람들을</S.Title02>
        <S.Title03>엎코에서 만나보세요!</S.Title03>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isNext === 0 ? (
            <>
              <S.Input01
                onKeyDown={NextButton}
                placeholder="이메일을 입력하세요."
                {...register("email")}
              ></S.Input01>

              <S.Button01 onClick={NextButton02}>UpCo</S.Button01>
            </>
          ) : (
            <>
              <S.Input02
                onKeyDown={NextButton}
                placeholder="비밀번호를 입력하세요."
                {...register("password")}
              ></S.Input02>
              <S.Button02>UpCo</S.Button02>
            </>
          )}
        </form>
      </div>
    </S.Wrapper>
  );
}
