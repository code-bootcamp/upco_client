import { useState } from "react";
import { useFormLogin } from "../../../hooks/useForm/useForm.login";
import AccountInput from "../../inputs/account/account.input.index";
import JoinUI from "../join/join.index";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";
import FindUI from "../find/find.index";
import { useLoginMode } from "../../../hooks/customs/useLoginMode";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const [isFind, setIsFind] = useState(false);
  // const [isJoin, setIsJoin] = useState(false);

  const { onSubmit } = useLoginMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin();

  const onClickClose = (move: string) => (): void => {
    if (move === "") props.setIsOpen((prev) => !prev);
    else if (move === "join") {
      props.setIsJoin((prev) => !prev);
      props.setIsOpen((prev) => !prev);
    } else if (move === "find") {
      props.setIsFind((prev) => !prev);
      props.setIsOpen((prev) => !prev);
    }
  };

  const onClickMoved = (move: string) => () => {
    // if (move === "join" || move === "") {
    //   props.setIsJoin((prev) => !prev);
    // } else {
    //   setIsFind((prev) => !prev);
    // }
  };

  return (
    <>
      {/* {props.isJoin || isFind ? (
        props.isJoin ? (
          <JoinUI onClickClose={onClickClose} />
        ) : (
          <FindUI onClickClose={onClickClose}></FindUI>
        )
      ) : ( */}
      <>
        <S.Background onClick={onClickClose("")} />
        <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
          <S.Close onClick={onClickClose("")} />
          <img src="/images/layout/logo.svg" />
          <S.InputBox>
            <AccountInput placeholder="이메일을 입력해주세요." register={register("email")} />
            <div>
              <p>{errors.email?.message}</p>
            </div>
          </S.InputBox>
          <S.InputBox>
            <AccountInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={register("password")}
            />
            <div>
              <p>{errors.password?.message}</p>
            </div>
          </S.InputBox>
          <button>로그인</button>
          <S.FindBox>
            <p onClick={onClickClose("find")}>비밀번호 찾기</p>
          </S.FindBox>
          <S.JoinText>
            <p onClick={onClickClose("join")}>회원이 아니신가요?</p>
          </S.JoinText>
          <S.DivideLineBox>
            <div></div>
            <span>간편 로그인</span>
            <div></div>
          </S.DivideLineBox>
          <S.IconBox>
            <li>
              <a href="https://api.upco.space/main/login/google">
                <img src="/images/social/google.svg" />
              </a>
            </li>
            <li>
              <a href="https://api.upco.space/main/login/google">
                <img src="/images/social/kakao.svg" />
              </a>
            </li>
          </S.IconBox>
        </S.Wrapper>
      </>
    </>
  );
}
